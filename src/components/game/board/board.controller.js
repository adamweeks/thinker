class GameBoardController {
    constructor($stateParams, GameService, UserService, AlertService) {
        this.AlertService = AlertService;
        this.GameService = GameService;
        this.UserService = UserService;
        this.name = 'GameBoardController';

        this.activate();
    }

    activate() {
        if (this.game.inProgress && this.GameService.userInGame(this.game, this.UserService.currentUser.user)) {
            this.watchGameplay(this.game);
        }
    }

    watchGameplay(game) {
        const gameChanged = () => {
            if (this.gameSettings.sounds) {
                this.AlertService.playAlertSound();
            }
            if (this.gameSettings.notifications) {
                if (!game.inProgress) {
                    this.AlertService.pushAlert('Game over!');
                    this.unwatchGame();
                } else {
                    // Alert if current user is active
                    const activeUser = this.GameService.activeUserForGame(game);
                    if (activeUser.user.userID === this.UserService.currentUser.user.userID) {
                        this.AlertService.pushAlert('Your turn!');
                    }
                }
            }
        };
        this.unwatchGame = game.$watch(gameChanged);
    }
}

GameBoardController.$inject = ['$stateParams', 'GameService', 'UserService', 'AlertService'];

export default GameBoardController;
