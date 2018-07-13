import { default as React } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { BaseNavigationScreenComponent } from '../components/BaseNavigationScreenComponent';
import { StatusBarComponent } from '../components/StatusBarComponent';
import { GameConfig } from '../GameConfig';
import { StyleSheet } from '../misc/StyleSheet';

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

- Game starts at ${GameConfig.initialCount}
- Player who press the button first will get the 'action'!
- Player 1 should make it ${GameConfig.lowerCount}
- Player 2 should make it ${GameConfig.upperCount}

- Green turns to Orange, and Orange turns to Red
- Green = You are ready for the 'action'
- Orange = You should release your finger now!
- Red = If you're still holding the button, your opponent wins!

    `;

    return (
      <StatusBarComponent color={GameConfig.color.pauseColor}>
        <View style={styles.vContainer}>

          {/* Back button */}
          <TouchableOpacity onPress={this.onBackButtonPressed}>
            <SimpleLineIcons style={styles.iBackIcon} name={'arrow-left-circle'} />
          </TouchableOpacity>

          {/* Instructions */}
          <ScrollView contentContainerStyle={styles.vInstructions}>
            <Text style={styles.tInstruction}>
              {instructions}
            </Text>
          </ScrollView>
        </View>
      </StatusBarComponent>
    );
  }

  private onBackButtonPressed = () => {
    this.props.navigation.goBack();
  }
}
