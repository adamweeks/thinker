class LobbyController {
    constructor(GameService, UserService) {
        this.name = 'LobbyController';
        this.GameService = GameService;
        this.UserService = UserService;
        this.activate();
    }

    activate() {
        this.answererLink = this.GameService.inviteAnswererLink(this.game);
        this.guesserLink = this.GameService.inviteGuesserLink(this.game);
        this.isCreator = this.GameService.isGameCreator(this.game, this.UserService.currentUser.user);
    }
}

LobbyController.$inject = ['GameService', 'UserService'];

export default LobbyController;
