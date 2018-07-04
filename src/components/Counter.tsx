import { Component, default as React } from 'react';
import { Text, TextProps } from 'react-native';
import { StyleSheet } from '../misc/StyleSheet';

interface Props extends TextProps {
  count: number;
  flip: number;
}

const styles = StyleSheet.create({
  tCount: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 50,
  },
});

export class Counter extends Component<Props>{
  render() {

    const { style, ...otherProps } = this.props;

    const flipStyle = { transform: [{ rotate: `${this.props.flip}deg` }] };

    return (
      <Text
        style={[styles.tCount, style, flipStyle]}
        {...otherProps}
      >
        {this.props.count}
      </Text>
    );
  }
}
