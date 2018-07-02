import { Component, default as React } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationActions, NavigationScreenProp, StackActions } from 'react-navigation';
import { StyleSheet } from '../misc/StyleSheet';
import { GameConfig } from '../GameConfig';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GameConfig.color.backgroundColor,
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
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={GameConfig.color.endColor}
          barStyle={'light-content'}
        />
        <View style={styles.container}>
          <Text style={styles.tTitle}>{GameConfig.initialCount}</Text>
          <Text style={styles.tPleaseWait}>Please wait</Text>
        </View>
      </View>
    );
  }
}
