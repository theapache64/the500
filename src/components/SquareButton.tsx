import { default as React, Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from './StyleSheet';

interface Props {
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
    return (
      <View style={styles.vContainer}>
        <TouchableOpacity style={styles.toSquareButton}>
          <Text style={styles.tTitle}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
