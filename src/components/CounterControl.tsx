import { Component, default as React } from 'react';
import { Text, TouchableHighlight, TouchableOpacityProps, View } from 'react-native';
import { GameConfig } from '../GameConfig';
import { StyleSheet } from '../misc/StyleSheet';

export enum CounterControlType {
  'add', 'substract',
}

interface Props extends TouchableOpacityProps {
  type: CounterControlType;
  count: number;
  onControlPressed: (type: CounterControlType, isHolding: boolean) => void;
  onTooMuchPressedIn: (type: CounterControlType) => void;
  playerName: string;
  flip?: number;
}

const styles = StyleSheet.create({

  toContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  vContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tCounterControl: {
    color: '#FFF',
    fontSize: 50,
  },

  tPlayerName: {
    color: '#FFF',
  },
});
export class CounterControl extends Component<Props>{

  timer: NodeJS.Timer = null;
  isAlreadyPressed = false;
  tooMuchTimer: NodeJS.Timer = null;

  render() {

    const { style, count, ...otherProps } = this.props;
    const symbol = this.props.type === CounterControlType.add ? '+' : '-';

    return (
      <TouchableHighlight
        underlayColor={GameConfig.color.startColorDark}
        onPressIn={this.onControlPressedIn}
        onPressOut={this.onControlPressedOut}
        style={[styles.toContainer, style]}
        {...otherProps}
      >
        <View style={styles.vContainer}>

          <Text style={styles.tCounterControl}>
            {symbol}
          </Text>

          <Text style={[styles.tPlayerName, this.getFlip()]}>
            {`${this.props.playerName} [${symbol}${this.getRemainingCountNeeded()}]`}
          </Text>

        </View>

      </TouchableHighlight>
    );
  }

  getRemainingCountNeeded(): number {

    if (this.props.type === CounterControlType.add) {
      return GameConfig.upperCount - this.props.count;
    }

    return this.props.count - GameConfig.lowerCount;
  }
  getFlip = (): any => {
    const { flip } = this.props;
    if (flip) {
      return { transform: [{ rotate: `${flip}deg` }] };
    }
  }

  private onControlPressedIn = () => {

    if (!this.isAlreadyPressed) {

      this.isAlreadyPressed = true;

      const { type } = this.props;

      // Default press
      this.props.onControlPressed(type, false);

      // Long press
      this.timer = setInterval(
        () => {
          this.props.onControlPressed(type, true);
        },
        50
      );

      this.tooMuchTimer = setTimeout(
        () => {
          this.props.onTooMuchPressedIn(type);
        },
        2000
      );
    }
  }

  private onControlPressedOut = () => {

    this.isAlreadyPressed = false;

    clearInterval(this.timer);
    clearTimeout(this.tooMuchTimer);
  }

  componentWillUnmount() {

    clearInterval(this.timer);
    clearTimeout(this.tooMuchTimer);
  }

}
