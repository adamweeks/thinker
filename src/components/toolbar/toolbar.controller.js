class ToolbarController {
    constructor(UserService, $rootScope) {
        this.name = 'ToolbarController';
        this.UserService = UserService;
        this.$rootScope = $rootScope;
        this.currentUser = UserService.currentUser;

        this.activate();
    }

    logout() {
        this.UserService.logout();
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

ToolbarController.$inject = ['UserService', '$rootScope'];

export default ToolbarController;
