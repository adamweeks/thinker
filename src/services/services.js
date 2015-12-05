import angular from 'angular';
import GameService from './game.service';

let servicesModule = angular.module('thinker.services', [

]);

servicesModule.service('GameService', GameService);

export default servicesModule;
