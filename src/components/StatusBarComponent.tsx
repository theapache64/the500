import { Component, default as React } from 'react';
import { StatusBar, View, SafeAreaView } from 'react-native';
import { StyleSheet } from '../misc/StyleSheet';

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
  },
});

interface Props {
  color: string;
}
export class StatusBarComponent extends Component<Props>{

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: this.props.color}}>
        {this.props.children}
      </SafeAreaView>
    );
  }
}
