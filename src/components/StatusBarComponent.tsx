import { Component, default as React } from 'react';
import { StatusBar, View } from 'react-native';
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
      <View style={styles.vContainer}>
        <StatusBar
          backgroundColor={this.props.color}
          barStyle={'light-content'}
        />

        {this.props.children}
      </View>
    );
  }
}
