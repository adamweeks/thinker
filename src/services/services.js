import * as angular from 'angular';
import GameService from './game.service';
import UserService from './user.service';

const servicesModule = angular.module('thinker.services', [

]);

servicesModule.service('GameService', GameService);
servicesModule.service('UserService', UserService);

export default servicesModule;
