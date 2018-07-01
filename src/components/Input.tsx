import { default as React, Component } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { StyleSheet } from './StyleSheet';

interface Props extends TextInputProps {

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '80%',
    backgroundColor: 'transparent',
    borderColor: '#FFF',
    borderWidth: 2,
    color: '#FFF',
    textAlign: 'center',
  },
});
export class Input extends Component<Props> {
  render() {

    const { style, ...otherProps } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          placeholderTextColor={'#666'}
          underlineColorAndroid={'transparent'}
          style={[styles.input, style]}
          {...otherProps}
        />
      </View>
    );
  }
}
