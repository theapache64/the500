/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 */

import { default as React, Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Vibration
} from 'react-native';
import { Counter } from './src/components/Counter';
import { CounterControl, CounterControlType } from './src/components/CounterControl';
import { RandomNumber } from './src/utils/RandomNumber';
import { GameConfig } from './src/GameConfig';

enum GameStates {
  'start', 'end', 'pause',
}

interface Props { }

interface States {
  count: number;
  gameState: GameStates;
}

export class App extends Component<Props, States> {

  startRandomGameStateChanger(timeout?: number): any {

    setTimeout(
      
      () => {
        // Recursion
        let newState!: GameStates;

        switch (this.state.gameState) {

          case GameStates.pause:
            newState = GameStates.start;
            break;

          case GameStates.start:
            newState = GameStates.end;
            break;

          case GameStates.end:
            newState = GameStates.pause;
            break;

          default:
            throw new Error(`Undefined gameState ${this.state.gameState}`);
        }

        this.setState(
          {
            gameState: newState,
          },
          () => {
            this.startRandomGameStateChanger();
          });
      },
      timeout ? timeout : RandomNumber.getBetween(GameConfig.minTimeout, GameConfig.maxTimeout)
    );
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      count: 555,
      gameState: GameStates.pause,
    };
  }

  componentDidMount() {
    // Start random game state changer here
    this.startRandomGameStateChanger();
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.getBackgroundColor() }]}>
        <CounterControl
          onTooMuchPressedIn={this.onTooMuchPressed}
          onControlPressed={this.onControlPressed}
          type={CounterControlType.substract}
        />
        <Counter count={this.state.count} />
        <CounterControl
          onTooMuchPressedIn={this.onTooMuchPressed}
          onControlPressed={this.onControlPressed}
          type={CounterControlType.add}
        />
      </View>
    );
  }

  private getBackgroundColor = (): string => {

    switch (this.state.gameState) {

      case GameStates.start:
        return GameConfig.color.startColor;

      case GameStates.end:
        return GameConfig.color.endColor;

      case GameStates.pause:
        return GameConfig.color.pauseColor;

      default:
        throw new Error(`Undefined game state ${this.state.gameState}`);
    }

  }

  private onControlPressed = (type: CounterControlType) => {

    Vibration.vibrate(100, false);

    this.setState(prevState => ({
      count: type === CounterControlType.add ? prevState.count + 1 : prevState.count - 1,
    }));

  }

  private onTooMuchPressed = (type: CounterControlType) => {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
