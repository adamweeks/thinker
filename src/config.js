import createGameTemplate from './game/create.html';
import CreateGameController from './game/create';

import gameTemplate from './game/game.html';
import GameController from './game/game';

import homeTemplate from './home/home.html';
import HomeController from './home/home';

import loginTemplate from './login/login.html';
import LoginController from './login/login';


function Config($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            controller: HomeController,
            controllerAs: 'vm',
            template: homeTemplate,
        })
        .state('create', {
            url: '/create',
            controller: CreateGameController,
            controllerAs: 'vm',
            template: createGameTemplate,
        })
        .state('game', {
            url: '/game/:gameID',
            controller: GameController,
            controllerAs: 'vm',
            template: gameTemplate,
        })
        .state('login', {
            url: '/login?from',
            controller: LoginController,
            controllerAs: 'vm',
            template: loginTemplate,
        });

    // $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
        .dark();
}

Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider'];

export default Config;
