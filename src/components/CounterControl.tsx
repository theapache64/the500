import { Component, default as React } from 'react';
import { Text, TouchableHighlight, TouchableOpacityProps } from 'react-native';
import { StyleSheet } from './StyleSheet';

export enum CounterControlType {
  'add', 'substract',
}

interface Props extends TouchableOpacityProps {
  type: CounterControlType;
  onControlPressed: (type: CounterControlType) => void;
  onTooMuchPressedIn: (type: CounterControlType) => void;
}

const styles = StyleSheet.create({

  toContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  tCounterControl: {
    color: '#FFF',
    fontSize: 50,
  },
});
export class CounterControl extends Component<Props>{

  timer = 0;
  isAlreadyPressed = false;
  tooMuchTimer = 0;

  render() {

    const { style, ...otherProps } = this.props;

    return (
      <TouchableHighlight
        underlayColor={'#333'}
        onPressIn={this.onControlPressedIn}
        onPressOut={this.onControlPressedOut}
        style={[styles.toContainer, style]}
        {...otherProps}
      >
        <Text style={styles.tCounterControl}>
          {this.props.type === CounterControlType.add ? '+' : '-'}
        </Text>
      </TouchableHighlight>
    );
  }

  private onControlPressedIn = () => {

    if (!this.isAlreadyPressed) {

      this.isAlreadyPressed = true;

      const { type } = this.props;

      // Default press
      this.props.onControlPressed(type);

      // Long press
      this.timer = setInterval(
        () => {
          this.props.onControlPressed(type);
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
}