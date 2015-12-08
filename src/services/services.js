import angular from 'angular';
import GameService from './game.service';
import UserService from './user.service';

let servicesModule = angular.module('thinker.services', [

]);

servicesModule.service('GameService', GameService);
servicesModule.service('UserService', UserService);

export default servicesModule;
