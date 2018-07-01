/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 */
import { default as React, Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { SplashScreen } from './src/screens/SplashScreen';
import { PlayerNameScreen } from './src/screens/PlayerNameScreen';
import { GameScreen } from './src/screens/GameScreen';
import { ResultScreen } from './src/screens/ResultScreen';

const ROOT_STACK = createStackNavigator(
  {
    SplashScreen,
    PlayerNameScreen,
    GameScreen,
    ResultScreen,
  },
  {
    initialRouteName: 'ResultScreen',
    initialRouteParams: {
      winnerName: 'SAFIYA',
      playerOneName: 'SHIFAR',
      playerTwoName: 'SAFIYA',
    },
    headerMode: 'none',
  });

export class App extends Component {
  render() {
    return (
      <ROOT_STACK />
    );
  }
}
