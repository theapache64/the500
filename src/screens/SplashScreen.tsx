import { Component, default as React } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions, NavigationScreenProp, StackActions } from 'react-navigation';
import { StyleSheet } from '../components/StyleSheet';
import { GameConfig } from '../GameConfig';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GameConfig.color.pauseColor,
  },

  tTitle: {
    color: '#FFF',
    fontSize: 100,
  },

  tPleaseWait: {
    color: '#333',
  },
});

interface Props {
  navigation: NavigationScreenProp<Props>;
}
export class SplashScreen extends Component<Props> {

  componentDidMount() {
    // Moving to PlayerNameScreen

    setTimeout(
      () => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: 'PlayerNameScreen',
            }),
          ],
        });

        this.props.navigation.dispatch(resetAction);
      },
      1500
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tTitle}>{GameConfig.initialCount}</Text>
        <Text style={styles.tPleaseWait}>Please wait</Text>
      </View>
    );
  }
}
