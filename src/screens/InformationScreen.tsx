import { default as React, Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet } from '../misc/StyleSheet';
import { GameConfig } from '../GameConfig';
import { default as Icon } from 'react-native-vector-icons/SimpleLineIcons';
import { BaseNavigationScreenComponent } from '../components/BaseNavigationScreenComponent';

interface Props {

}

interface States {

}

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    backgroundColor: GameConfig.color.backgroundColor,
  },

  iBackIcon: {
    color: '#FFF',
    padding: 15,
    fontSize: 25,
  },

  vInstructions: {
    padding: 10,
  },

  tInstruction: {
    color: '#FFF',
    lineHeight: 25,
  },
});

export class InformationScreen extends BaseNavigationScreenComponent<Props, States>{

  render() {

    const instructions = `
# Random notes

1) Game starts at ${GameConfig.initialCount}
2) Player who presses the button first gets the 'action'!

2) Player 1 should make it ${GameConfig.lowerCount}
3) Player 2 should make it ${GameConfig.upperCount}
4) Green turns to Orange, and Orange turns to Red

5) Green = You are ready for the 'action'
6) Orange = You should release your finger now!
7) Red = If you're still holding the button, your opponent wins!

    `;

    return (
      <View style={styles.vContainer}>

        {/* Back button */}
        <TouchableOpacity onPress={this.onBackButtonPressed}>
          <Icon style={styles.iBackIcon} name={'arrow-left-circle'} />
        </TouchableOpacity>

        {/* Instructions */}
        <ScrollView contentContainerStyle={styles.vInstructions}>
          <Text style={styles.tInstruction}>
            {instructions}
          </Text>
        </ScrollView>
      </View>
    );
  }

  private onBackButtonPressed = () => {
    this.props.navigation.goBack();
  }
}
