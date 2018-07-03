import { Component, default as React } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { StyleSheet } from '../misc/StyleSheet';

interface Props extends TouchableOpacityProps {
  title: string;
}

interface States {

}

const styles = StyleSheet.create({

  vContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  toSquareButton: {
    padding: 10,
    width: '80%',
    borderColor: '#FFF',
    borderWidth: 2,
  },

  tTitle: {
    textAlign: 'center',
    color: '#FFF',
  },
});

export class SquareButton extends Component<Props, States>{
  render() {

    const { style, ...otherProps } = this.props;

    return (
      <View style={styles.vContainer}>
        <TouchableOpacity
          style={[styles.toSquareButton, style]}
          {...otherProps}
        >
          <Text style={styles.tTitle}>
            {this.props.title}
          </Text>
          
        </TouchableOpacity>
      </View>
    );
  }
}
