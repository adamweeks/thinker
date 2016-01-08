class GameSettings {
    constructor() {
        this.sounds = true;
        this.notifications = false;
    }
}

class GameController {
    constructor($stateParams, GameService, UserService, AlertService) {
        this.AlertService = AlertService;
        this.GameService = GameService;
        this.UserService = UserService;
        this.name = 'GameController';
        this.gameID = $stateParams.gameID;
        this.gameSettings = new GameSettings();
        this.gameLoaded = false;
        this.loadGame(this.gameID);
    }

    loadGame() {
        const gameLoaded = (game) => {
            this.game = game;
            this.gameLoaded = true;
            if (this.game.inProgress && this.GameService.userInGame(this.game, this.UserService.currentUser.user)) {
                this.watchGameplay(game);
            }
        };

        this.GameService.loadGame(this.gameID).then(gameLoaded);
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

GameController.$inject = ['$stateParams', 'GameService', 'UserService', 'AlertService'];

export default GameController;
