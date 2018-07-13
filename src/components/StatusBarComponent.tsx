import { Component, default as React } from 'react';
import { SafeAreaView } from 'react-native';

interface Props {
  color: string;
}
export class StatusBarComponent extends Component<Props>{

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: this.props.color }}>
        {this.props.children}
      </SafeAreaView>
    );
  }
}
