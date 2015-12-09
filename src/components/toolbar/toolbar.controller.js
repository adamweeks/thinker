class ToolbarController {
    constructor(UserService) {
        this.name = 'ToolbarController';
        this.UserService = UserService;
        this.currentUser = UserService.currentUser;
    }

    logout() {
        this.UserService.logout();
    }
}

ToolbarController.$inject = ['UserService'];

export default ToolbarController;
