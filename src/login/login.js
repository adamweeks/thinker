class LoginController {
    constructor($state, $stateParams, UserService) {
        this.name = 'LoginController';
        this.UserService = UserService;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.activate();
    }

    activate() {
        if (this.UserService.currentUser.isLoggedIn) {
            this.$state.go('home');
        }
    }

    login() {
        const $state = this.$state;
        const $stateParams = this.$stateParams;
        const userLoggedIn = () => {
            const state = $stateParams.from ? $stateParams.from : 'home';
            $state.go(state);
        };
        this.UserService.login(this.username).then(userLoggedIn);
    }
}

LoginController.$inject = ['$state', '$stateParams', 'UserService'];

export default LoginController;
