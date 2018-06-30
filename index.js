import { AppRegistry, YellowBox } from 'react-native';
import { App } from './App';

YellowBox.ignoreWarnings(['Warning: isMounted'])

AppRegistry.registerComponent('CountKeeper', () => App);
