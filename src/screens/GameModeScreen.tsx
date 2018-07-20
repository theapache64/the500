import { default as React, PureComponent } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { SquareButton } from '../components/SquareButton';
import { StatusBarComponent } from '../components/StatusBarComponent';
import { GameConfig } from '../GameConfig';
import { BaseNavigationScreenComponent } from '../components/BaseNavigationScreenComponent';
import { GameMode } from './GameScreen';
import { default as Icon } from 'react-native-vector-icons/SimpleLineIcons';

interface Props {

}

interface States {

}

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    backgroundColor: GameConfig.color.backgroundColor
  },
  iIcon: {
    color: '#FFF',
    fontSize: 25,
    padding: 10,
  },
  toInfo: {
    zIndex: 9,
    position: 'absolute',
    top: 0,
    right: 0,
    height: 50,
    width: 50
  }
});

export class GameModeScreen extends BaseNavigationScreenComponent<Props, States> {
  render() {
    return (
      <StatusBarComponent color={GameConfig.color.pauseColor} >

        {/* Information icon */}
        <TouchableOpacity onPress={this.onInformationClicked} style={styles.toInfo}>
          <Icon style={styles.iIcon} name={'info'} />
        </TouchableOpacity>

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

  onInformationClicked = () => {
    Alert.alert('', `You'll learn the rules eventually. ;)`);
  }
}
