import { default as React, Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { BaseNavigationScreenComponent } from '../components/BaseNavigationScreenComponent';
import { StyleSheet } from '../components/StyleSheet';
import { GameConfig } from '../GameConfig';
import { SquareButton } from '../components/SquareButton';

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
    flex: 1,
    flexDirection: 'row',
  },
});
// tslint:disable
export class ResultScreen extends BaseNavigationScreenComponent<Props> {

  render() {

    const winnerName = this.props.navigation.getParam('winnerName');

    return (
      <View style={styles.vContainer}>

        {/* Player One status */}
        <View style={[styles.vGrid, styles.vFlip180]}>
          <Result/>
        </View>

        {/* Start again and Exit  */}
        <View style={[styles.vGrid, styles.vButtons]}>
          <SquareButton title={'PLAY AGAIN'} />
          <SquareButton title={'EXIT'} />
        </View>

        {/* Player two status */}
        <View style={styles.vGrid}>

        </View>

      </View>
    )
  }
}