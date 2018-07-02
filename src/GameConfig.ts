import { GameStates } from './screens/GameScreen';

export class GameConfig {
  static getBackgroundColor = (gameState: GameStates): string => {

    switch (gameState) {

      case GameStates.start:
        return GameConfig.color.startColor;

      case GameStates.end:
        return GameConfig.color.endColor;

      case GameStates.pause:
        return GameConfig.color.pauseColor;

      default:
        throw new Error(`Undefined game state ${gameState}`);
    }

  }

  // Colors
  static readonly color = class {

    static readonly backgroundColor = '#212121';
    static readonly pauseColor = '#D32F2F';

    static readonly startColor = '#388E3C';
    static readonly startColorDark = '#1B5E20';

    static readonly endColor = '#F57C00';
  };

  static minTimeout: number = 1000;
  static maxTimeout: number = 3000;
  static tooMuchHoldTimeout: number = 1500;
  static initialCount: number = 500;
  static upperCount: number = 600;
  static lowerCount: number = 400;

}
