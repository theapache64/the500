/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 */
import { Component, default as React } from 'react';
import { createStackNavigator } from 'react-navigation';
import { GameResult } from './src/components/Result';
import { GameScreen } from './src/screens/GameScreen';
import { InformationScreen } from './src/screens/InformationScreen';
import { PlayerNameScreen } from './src/screens/PlayerNameScreen';
import { ResultScreen } from './src/screens/ResultScreen';
import { SplashScreen } from './src/screens/SplashScreen';
import { GameModeScreen } from './src/screens/GameModeScreen';

const ROOT_STACK = createStackNavigator(
  {
    SplashScreen,
    GameModeScreen,
    PlayerNameScreen,
    InformationScreen,
    GameScreen,
    ResultScreen,
  },
  {
    initialRouteName: 'GameModeScreen',
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
