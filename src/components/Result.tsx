import { Component, default as React } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from '../misc/StyleSheet';

export enum GameResult {
  'WINNER' = 'WINNER',
  'LOSER' = 'LOSER',
}

interface Props {
  name: string;
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

  tName: {
    color: '#FFF',
  },
});

export class Result extends Component<Props, States>{
  render() {
    return (
      <View style={styles.vContainer}>

        {/* Loser */}
        <Text
          style={styles.tTitle}
        >
          {this.props.result}
        </Text>

        {/* Name */}
        <Text style={styles.tName}>
          {this.props.name}
        </Text>

      </View>
    );
  }
}
