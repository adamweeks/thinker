import * as angular from 'angular';
import gameComponent from './game/game.component';
import gameCreateComponent from './create/create.component';
import gameOverComponent from './gameOver/gameOver.component';
import gameGuesserComponent from './guesser/guesser.component';
import gameHistoryComponent from './history/history.component';
import gameLobbyComponent from './lobby/lobby.component';
import gameQuestionComponent from './question/question.component';
import gameSettingsComponent from './settings/settings.component';


const gameComponentModule = angular.module('thinker.components.game', [

]);

gameComponentModule.directive('game', gameComponent);
gameComponentModule.directive('gameCreate', gameCreateComponent);
gameComponentModule.directive('gameGuesser', gameGuesserComponent);
gameComponentModule.directive('gameHistory', gameHistoryComponent);
gameComponentModule.directive('gameLobby', gameLobbyComponent);
gameComponentModule.directive('gameOver', gameOverComponent);
gameComponentModule.directive('gameQuestion', gameQuestionComponent);
gameComponentModule.directive('gameSettings', gameSettingsComponent);


export default gameComponentModule;
