import { default as React, PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { SquareButton } from '../components/SquareButton';
import { StatusBarComponent } from '../components/StatusBarComponent';
import { GameConfig } from '../GameConfig';
import { BaseNavigationScreenComponent } from '../components/BaseNavigationScreenComponent';
import { GameMode } from './GameScreen';

interface Props {

}

interface States {

}

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    backgroundColor: GameConfig.color.backgroundColor
  },
});

export class GameModeScreen extends BaseNavigationScreenComponent<Props, States> {
  render() {
    return (
      <StatusBarComponent color={GameConfig.color.pauseColor} >
        <View style={styles.vContainer}>

          {/* Single Player */}
          <SquareButton
            onPress={this.onSinglePlayerClicked}
            title={'SINGLE PLAYER'}
          />

          {/* Multiplayer */}
          <SquareButton
            onPress={this.onDualPlayerClicked}
            title={'DUAL PLAYER'}
          />


        </View>
      </StatusBarComponent >
    );
  }

  onSinglePlayerClicked = () => {
    this.props.navigation.navigate(
      'GameScreen', {
        gameMode: GameMode.single,
        playerOneName: 'COMPUTER',
        playerTwoName: 'YOU',
      }
    );
  }

  onDualPlayerClicked = () => {
    this.props.navigation.navigate('PlayerNameScreen');
  }
}
