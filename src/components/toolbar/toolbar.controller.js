class ToolbarController {
    constructor(UserService) {
        this.name = 'ToolbarController';
        this.UserService = UserService;
        this.isLoggedIn = UserService.isLoggedIn;
        this.user = UserService.currentUser;
    }

    login() {
        const service = this;
        const userLoggedIn = (user) => {
            service.user = user;
            service.isLoggedIn = true;
        };
        this.UserService.login().then(userLoggedIn);
    }

    logout() {
        const service = this;
        const userLoggedOut = () => {
            service.user = false;
            service.isLoggedIn = false;
        };
        this.UserService.logout().then(userLoggedOut);
    }
}

ToolbarController.$inject = ['UserService'];

export default ToolbarController;
