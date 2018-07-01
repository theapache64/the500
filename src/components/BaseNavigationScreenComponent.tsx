import { Component } from 'react';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<Props>;
}
export class BaseNavigationScreenComponent<P = {}, S = {}> extends Component<Props & P, S> {

}
