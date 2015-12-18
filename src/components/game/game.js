import * as angular from 'angular';
import gameQuestionComponent from './question.component';
import gameGuesserComponent from './guesser.component';
import gameOverComponent from './gameOver/gameOver.component';

const gameComponentModule = angular.module('thinker.components.game', [

]);

gameComponentModule.directive('gameQuestion', gameQuestionComponent);
gameComponentModule.directive('gameGuesser', gameGuesserComponent);
gameComponentModule.directive('gameOver', gameOverComponent);

export default gameComponentModule;
