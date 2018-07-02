import { Component, default as React } from 'react';
import { Alert, View, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { CustomButton } from '../components/CustomButton';
import { Input } from '../components/Input';
import { StyleSheet } from '../misc/StyleSheet';
import { GameConfig } from '../GameConfig';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

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
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },

  iIcon: {
    color: '#FFF',
    fontSize: 20,
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
      <View style={styles.container}>

        <View style={styles.vHeader}>

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
