import angular from 'angular';
import gameQuestionComponent from './question.component';
import gameGuesserComponent from './guesser.component';

let gameComponentModule = angular.module('thinker.components.game', [

]);

gameComponentModule.directive('gameQuestion', gameQuestionComponent);
gameComponentModule.directive('gameGuesser', gameGuesserComponent);

export default gameComponentModule;
