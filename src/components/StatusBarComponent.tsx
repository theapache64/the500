import { default as React, Component } from 'react';
import { View, Text } from 'react-native';

interface Props {

}

interface States {

}
export class StatusBarComponent extends Component<Props, States>{
  render() {
    return (
      <View style={styles.vContainer}>
        <Text>This is sample text</Text>
      </View>
    );
  }
}
