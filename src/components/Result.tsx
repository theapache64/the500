import { default as React, Component } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from './StyleSheet';

export enum GameResult {
  'WINNER' = 'WINNER',
  'LOOSER' = 'LOOSER',
}

interface Props {
  result: GameResult;
}

interface States {

}

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tTitle: {
    fontSize: 30,
    color: '#FFF',
  },
});

export class Result extends Component<Props, States>{
  render() {
    return (
      <View style={styles.vContainer}>
        <Text
          style={styles.tTitle}
        >
          {this.props.result.toString()}
        </Text>
      </View>
    );
  }
}
