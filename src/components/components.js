import angular from 'angular';
import Game from './game/game';

let componentModule = angular.module('thinker.components', [
    Game.name
]);

export default componentModule;
