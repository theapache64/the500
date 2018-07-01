import { Component, default as React } from 'react';
import { Alert, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { CustomButton } from '../components/CustomButton';
import { Input } from '../components/Input';
import { StyleSheet } from '../components/StyleSheet';
import { GameConfig } from '../GameConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GameConfig.color.pauseColor,
  },

  vGrid: {
    flex: 1,
  },
});

interface Props {
  navigation: NavigationScreenProp<Props>;
}

interface States {
  playerOneName: string;
  playerTwoName: string;
}

export class PlayerNameScreen extends Component<Props, States> {

  constructor(props: Props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Player one  */}
        <View style={styles.vGrid}>
          <Input
            value={this.state.playerOneName}
            onChangeText={this.onPlayerOneTextChanged}
            placeholder={'Player 1'}
          />
        </View>

        {/* Submit */}
        <View style={styles.vGrid}>
          <CustomButton onPress={this.onStartClicked} title={'START'} />
        </View>

        {/* Player two */}
        <View style={styles.vGrid}>
          <Input
            value={this.state.playerTwoName}
            onChangeText={this.onPlayerTwoTextChanged}
            placeholder={'Player 2'}
          />
        </View>

      </View >
    );
  }

  onStartClicked = () => {
    const { playerOneName, playerTwoName } = this.state;

    if (!playerOneName || !playerTwoName) {
      Alert.alert('Error', 'Please specify players name');
      return;
    }

    // Has valid name here
    this.props.navigation.navigate('GameScreen', {
      playerOneName,
      playerTwoName,
    });

  }

  onPlayerOneTextChanged = (name: string) => {
    this.setState({
      playerOneName: name.toUpperCase(),
    });
  }

  onPlayerTwoTextChanged = (name: string) => {
    this.setState({
      playerTwoName: name.toUpperCase(),
    });
  }
}
