import { default as React, Component } from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { StyleSheet } from '../misc/StyleSheet';

interface Props extends TouchableOpacityProps {
  title: string;
}

const styles = StyleSheet.create({
  toContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tTitle: {
    color: '#FFF',
    fontSize: 30,
  },
});

export class CustomButton extends Component<Props> {

  render() {

    const { style, ...otherProps } = this.props;

    return (
      <TouchableOpacity style={[styles.toContainer, style]} {...otherProps}>
        <Text style={styles.tTitle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }

}
