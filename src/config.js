import homeTemplate from './home/home.html';
import HomeController from './home/home';

function Config($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            controller: HomeController,
            controllerAs: 'vm',
            template: homeTemplate,
        });

    $locationProvider.html5Mode(true);
}

Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default Config;
