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

const ROOT_STACK = createStackNavigator(
  {
    SplashScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  });

export class App extends Component {
  render() {
    return (
      <ROOT_STACK />
    );
  }
}
