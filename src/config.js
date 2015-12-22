function Config($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/');

    const requireAuth = {
        // controller will not be loaded until $waitForAuth resolves
        // Auth refers to our $firebaseAuth wrapper in the example above
        'currentAuth': ['FirebaseService', function(FirebaseService) {
        // $waitForAuth returns a promise so the resolve waits for it to complete
            return FirebaseService.waitForAuth().then(function(value) {
                if (value === null) {
                    return Promise.reject('AUTH_REQUIRED');
                }
            });
        }],
    };

    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>',
        })
        .state('create', {
            url: '/create',
            template: '<game-create></game-create>',
            resolve: requireAuth,
        })
        .state('game', {
            url: '/game/:gameID',
            template: '<game></game>',
        })
        .state('invite', {
            url: '/invite/:gameID/:role',
            template: 'INVITE',
        })
        .state('login', {
            url: '/login?from',
            template: '<login></login>',
        });

    // $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
        .primaryPalette('yellow')
        .dark();
}

Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider'];

export default Config;
