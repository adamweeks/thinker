import * as angular from 'angular';
import Game from './game/game';
import Toolbar from './toolbar/toolbar';

const componentModule = angular.module('thinker.components', [
    Game.name,
    Toolbar.name,
]);

export default componentModule;
