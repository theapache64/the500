/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 */

import { Component, default as React } from 'react';
import { StyleSheet, Vibration, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Counter } from '../components/Counter';
import { CounterControl, CounterControlType } from '../components/CounterControl';
import { GameConfig } from '../GameConfig';
import { RandomNumber } from '../utils/RandomNumber';
import { GameResult } from '../components/Result';

export enum GameStates {
  'start', 'end', 'pause',
}

interface Props {
  navigation: NavigationScreenProp<Props>;
}

interface States {
  count: number;
  gameState: GameStates;
  scoreFlip: number;
}

export class GameScreen extends Component<Props, States> {

  stateChangeTimer = 0;

  constructor(props: Props) {
    super(props);

    this.state = {
      scoreFlip: 90,
      count: GameConfig.initialCount,
      gameState: GameStates.pause,
    };
  }

  startRandomGameStateChanger(timeout?: number): any {

    this.stateChangeTimer = setTimeout(

      () => {

        // Recursion
        let newState!: GameStates;
        let scoreFlip: number;

        switch (this.state.gameState) {

          case GameStates.pause:
            newState = GameStates.start;
            break;

          case GameStates.start:
            newState = GameStates.end;
            break;

          case GameStates.end:
            scoreFlip = 90;
            newState = GameStates.pause;
            break;

          default:
            throw new Error(`Undefined gameState ${this.state.gameState}`);
        }

        this.setState(
          prevState => ({
            scoreFlip: scoreFlip ? scoreFlip : prevState.scoreFlip,
            gameState: newState,
          }),
          () => {
            this.startRandomGameStateChanger(
              // If it's end, watchfor tooMuchHold
              this.state.gameState === GameStates.end && GameConfig.tooMuchHoldTimeout
            );
          }
        );

      },
      timeout ? timeout : RandomNumber.getBetween(GameConfig.minTimeout, GameConfig.maxTimeout)
    );
  }

  componentDidMount() {
    // Start random game state changer here
    this.startRandomGameStateChanger();
  }

  componentWillUnmount() {
    // Removing timeout
    clearTimeout(this.stateChangeTimer);
  }

  getBgColor = () => (
    { backgroundColor: GameConfig.getBackgroundColor(this.state.gameState) }
  )

  render() {

    const playerOneName = this.props.navigation.getParam('playerOneName');
    const playerTwoName = this.props.navigation.getParam('playerTwoName');

    return (
      <View style={[styles.container, this.getBgColor()]}>
        <CounterControl
          playerName={playerOneName}
          flip={180}
          onTooMuchPressedIn={this.onTooMuchPressed}
          onControlPressed={this.onControlPressed}
          type={CounterControlType.substract}
        />
        <Counter flip={this.state.scoreFlip} count={this.state.count} />
        <CounterControl
          playerName={playerTwoName}
          onTooMuchPressedIn={this.onTooMuchPressed}
          onControlPressed={this.onControlPressed}
          type={CounterControlType.add}
        />
      </View>
    );
  }
  private onControlPressed = (type: CounterControlType, isHolding: boolean) => {

    const { gameState } = this.state;

    if (gameState !== GameStates.pause) {
      // Green or red
      Vibration.vibrate(100, false);

      this.setState(
        prevState => ({
          scoreFlip: type === CounterControlType.add ? 0 : 180,
          count: type === CounterControlType.add ? prevState.count + 1 : prevState.count - 1,
        }),
        () => {
          // Checking count 
          const { count } = this.state;

          if (count >= GameConfig.upperCount || count <= GameConfig.lowerCount) {
            // Limit reached
            this.props.navigation.replace('ResultScreen', {

              playerOneResult: count <= GameConfig.lowerCount
                ? GameResult.WINNER
                : GameResult.LOOSER,

              playerTwoResult: count >= GameConfig.upperCount
                ? GameResult.WINNER
                : GameResult.LOOSER,

            });
          }

        }
      );
    } else {

      // False press
      this.props.navigation.replace('ResultScreen', {
        playerOneResult: type === CounterControlType.add ? GameResult.WINNER : GameResult.LOOSER,
        playerTwoResult: type === CounterControlType.add ? GameResult.LOOSER : GameResult.WINNER,
      });

    }

  }

  private onTooMuchPressed = (type: CounterControlType) => {
    // The pressed player will fail here
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
