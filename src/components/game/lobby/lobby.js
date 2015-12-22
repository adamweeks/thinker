class LobbyController {
    constructor(GameService) {
        this.name = 'LobbyController';
        this.GameService = GameService;

        this.activate();
    }

    activate() {
        this.answererLink = this.GameService.inviteAnswererLink(this.game);
        this.guesserLink = this.GameService.inviteGuesserLink(this.game);
    }
}

LobbyController.$inject = ['GameService'];

export default LobbyController;
