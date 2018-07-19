import { Component, default as React } from 'react';
import { StatusBar, View, SafeAreaView, Platform } from 'react-native';
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

    if (Platform.OS === 'android') {
      return (
        <View flex={1}>
          <StatusBar backgroundColor={this.props.color} />
          {this.props.children}
        </View>
      );
    }

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: this.props.color }}>
        {this.props.children}
      </SafeAreaView>
    );
  }
}
