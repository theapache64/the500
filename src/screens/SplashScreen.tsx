import { default as React, Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { StyleSheet } from '../components/StyleSheet';
import { GameConfig } from '../GameConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: GameConfig.color.pauseColor,
  },
});

export class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
        />

        <TextInput
          style={styles.input}
        />

      </View>
    );
  }
}
