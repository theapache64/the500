import { default as React, Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { BaseNavigationScreenComponent } from '../components/BaseNavigationScreenComponent';
import { StyleSheet } from '../components/StyleSheet';
import { GameConfig } from '../GameConfig';
import { SquareButton } from '../components/SquareButton';
import { Result, GameResult } from '../components/Result';

interface Props {

}

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    backgroundColor: GameConfig.color.pauseColor,
  },

  tWinnerName: {
    color: '#FFF',
    alignSelf: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },

  vGrid: {
    flex: 1,
    justifyContent: 'center',
  },

  vFlip180: {
    transform: [{ rotate: '180deg' }],
  },

  vButtons: {
    flexDirection: 'row',
  },
});
// tslint:disable
export class ResultScreen extends BaseNavigationScreenComponent<Props> {

  render() {

    const playerOneResult: GameResult = this.props.navigation.getParam('playerOneResult');
    const playerTwoResult: GameResult = this.props.navigation.getParam('playerTwoResult');

    return (
      <View style={styles.vContainer}>

        {/* Player One status */}
        <View style={[styles.vGrid, styles.vFlip180]}>
          <Result result={playerOneResult} />
        </View>

        {/* Start again and Exit  */}
        <View style={[styles.vButtons]}>
          <SquareButton onPress={this.onPlayAgainClicked} title={'PLAY AGAIN'} />
        </View>

        {/* Player two status */}
        <View style={styles.vGrid}>
          <Result result={playerTwoResult} />
        </View>

      </View>
    )
  }

  onPlayAgainClicked = () => {

  }

}