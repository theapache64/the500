import { default as React } from 'react';
import { View } from 'react-native';
import { BaseNavigationScreenComponent } from '../components/BaseNavigationScreenComponent';
import { GameResult, Result } from '../components/Result';
import { SquareButton } from '../components/SquareButton';
import { StatusBarComponent } from '../components/StatusBarComponent';
import { GameConfig } from '../GameConfig';
import { StyleSheet } from '../misc/StyleSheet';

interface Props {

}

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    backgroundColor: GameConfig.color.backgroundColor,
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

export class ResultScreen extends BaseNavigationScreenComponent<Props> {

  render() {

    const playerOneName = this.props.navigation.getParam('playerOneName');
    const playerTwoName = this.props.navigation.getParam('playerTwoName');
    const playerOneResult: GameResult = this.props.navigation.getParam('playerOneResult');
    const playerTwoResult: GameResult = this.props.navigation.getParam('playerTwoResult');

    return (
      <StatusBarComponent color={GameConfig.color.startColor}>
        <View style={styles.vContainer}>

          {/* Player One status */}
          <View style={[styles.vGrid, styles.vFlip180]}>
            <Result name={playerOneName} result={playerOneResult} />
          </View>

          {/* Start again and Exit  */}
          <View style={[styles.vButtons]}>
            <SquareButton onPress={this.onPlayAgainClicked} title={'PLAY AGAIN'} />
          </View>

          {/* Player two status */}
          <View style={styles.vGrid}>
            <Result name={playerTwoName} result={playerTwoResult} />
          </View>

        </View>
      </StatusBarComponent>
    );
  }

  onPlayAgainClicked = () => {
    this.props.navigation.goBack();
  }

}
