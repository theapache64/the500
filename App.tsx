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
import { Counter } from './components/Counter';
import { CounterControl, CounterControlType } from './components/CounterControl';

enum GameStates {
  'start', 'end', 'pause',
}

interface Props { }

interface States {
  count: number;
  gameState: GameStates;
}

const pauseColor = '#212121';

const startColor = '#388E3C';
const startColorDark = '#1B5E20';

const endColor = '#D32F2F';
const endColorDark = '#B71C1C';

export class App extends Component<Props, States> {

  constructor(props: Props) {
    super(props);

    this.state = {
      count: 555,
      gameState: GameStates.pause,
    };
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
        return startColor;

      case GameStates.end:
        return endColor;

      case GameStates.pause:
        return pauseColor;

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
