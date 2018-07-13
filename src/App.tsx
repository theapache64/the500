/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 */
import { default as React, Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { SplashScreen } from './screens/SplashScreen';
import { PlayerNameScreen } from './screens/PlayerNameScreen';
import { GameScreen } from './screens/GameScreen';
import { ResultScreen } from './screens/ResultScreen';
import { GameResult } from './components/Result';
import { InformationScreen } from './screens/InformationScreen';

const ROOT_STACK = createStackNavigator(
  {
    SplashScreen,
    PlayerNameScreen,
    InformationScreen,
    GameScreen,
    ResultScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    initialRouteParams: {
      playerOneResult: GameResult.WINNER,
      playerTwoResult: GameResult.LOSER,

      playerOneName: 'SAFIYA',
      playerTwoName: 'SHIFAR',
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
