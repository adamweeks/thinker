class ToolbarController {
    constructor(UserService, $rootScope, $state) {
        this.name = 'ToolbarController';
        this.UserService = UserService;
        this.$rootScope = $rootScope;
        this.$state = $state;

        this.currentUser = UserService.currentUser;

        this.activate();
    }

    logout() {
        this.UserService.logout();
        this.$state.go('home');
    }

    activate() {
        this.watchUserState();
        this.UserService.checkStoredUser();
    }

    watchUserState() {
        const service = this;
        const userStateChanged = () => {
            service.currentUser = service.UserService.currentUser;
            service.$rootScope.$applyAsync();
        };

        this.$rootScope.$on(this.UserService.broadcast, userStateChanged);
    }
}

ToolbarController.$inject = ['UserService', '$rootScope', '$state'];

export default ToolbarController;
