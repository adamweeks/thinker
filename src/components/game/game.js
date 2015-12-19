import * as angular from 'angular';
import gameQuestionComponent from './question.component';
import gameGuesserComponent from './guesser.component';
import gameOverComponent from './gameOver/gameOver.component';
import gameHistoryComponent from './history/history.component';

const gameComponentModule = angular.module('thinker.components.game', [

]);

gameComponentModule.directive('gameQuestion', gameQuestionComponent);
gameComponentModule.directive('gameGuesser', gameGuesserComponent);
gameComponentModule.directive('gameOver', gameOverComponent);
gameComponentModule.directive('gameHistory', gameHistoryComponent);

export default gameComponentModule;
