import { Component, default as React } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions, NavigationScreenProp, StackActions } from 'react-navigation';
import { StatusBarComponent } from '../components/StatusBarComponent';
import { GameConfig } from '../GameConfig';
import { StyleSheet } from '../misc/StyleSheet';

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

  getStatusBarColor(): string {
    return GameConfig.color.endColor;
  }

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
      <StatusBarComponent color={GameConfig.color.pauseColor}>
        <View style={styles.container}>
          <Text style={styles.tTitle}>{GameConfig.initialCount}</Text>
          <Text style={styles.tPleaseWait}>Please wait</Text>
        </View>
      </StatusBarComponent>
    );
  }
}
