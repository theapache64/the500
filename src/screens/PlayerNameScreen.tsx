import { Component, default as React } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { default as Icon } from 'react-native-vector-icons/SimpleLineIcons';
import { NavigationScreenProp } from 'react-navigation';
import { CustomButton } from '../components/CustomButton';
import { Input } from '../components/Input';
import { StatusBarComponent } from '../components/StatusBarComponent';
import { GameConfig } from '../GameConfig';
import { StyleSheet } from '../misc/StyleSheet';
import { GameMode } from './GameScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GameConfig.color.backgroundColor,
  },

  vGrid: {
    flex: 1,
  },

  vHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },

  iIcon: {
    color: '#FFF',
    fontSize: 25,
    padding: 10,
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
      <StatusBarComponent color={GameConfig.color.endColor}>
        <View style={styles.container}>

          <View style={styles.vHeader}>

            {/* Back icon icon */}
            <TouchableOpacity onPress={this.onBackButtonPressed}>
              <Icon style={styles.iIcon} name={'arrow-left-circle'} />
            </TouchableOpacity>

            {/* Information icon */}
            <TouchableOpacity onPress={this.onInformationClicked}>
              <Icon style={styles.iIcon} name={'info'} />
            </TouchableOpacity>

          </View>

          {/* Player one  */}
          <View style={styles.vGrid}>
            <Input
              value={this.state.playerOneName}
              onChangeText={this.onPlayerOneTextChanged}
              placeholder={'Player 1'}
            />
          </View>

          {/* Submit */}
          <CustomButton
            onPress={this.onStartClicked}
            title={'START'}
          />

          {/* Player two */}
          <View style={styles.vGrid}>
            <Input
              value={this.state.playerTwoName}
              onChangeText={this.onPlayerTwoTextChanged}
              placeholder={'Player 2'}
            />
          </View>

        </View >
      </StatusBarComponent>
    );
  }

  onInformationClicked = () => {
    this.props.navigation.navigate('InformationScreen');
  }

  onStartClicked = () => {
    const { playerOneName, playerTwoName } = this.state;

    if (!playerOneName || !playerTwoName) {
      Alert.alert('Error', 'Please specify players names');
      return;
    }

    // Has valid name here
    this.props.navigation.navigate('GameScreen', {
      playerOneName,
      playerTwoName,
      gameMode: GameMode.dual,
    });

  }

  onBackButtonPressed = () => {
    this.props.navigation.goBack();
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
