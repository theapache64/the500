import { default as React, Component } from 'react';
import { Text, TextProps } from 'react-native';
import { StyleSheet } from './StyleSheet';

interface Props extends TextProps {
  count: number;
}

const styles = StyleSheet.create({
  tCount: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFF',
    fontSize: 50,
  },
});

export class Counter extends Component<Props>{
  render() {

    const { style, ...otherProps } = this.props;

    return (
      <Text style={[styles.tCount, style]} {...otherProps}>{this.props.count}</Text>
    );
  }
}
