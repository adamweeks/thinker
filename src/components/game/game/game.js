class GameController {
    constructor($stateParams, GameService, UserService, AlertService) {
        this.AlertService = AlertService;
        this.GameService = GameService;
        this.UserService = UserService;
        this.name = 'GameController';
        this.gameID = $stateParams.gameID;
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
            this.AlertService.playAlertSound();
        };
        this.unwatchGame = game.$watch(gameChanged);
    }
}

GameController.$inject = ['$stateParams', 'GameService', 'UserService', 'AlertService'];

export default GameController;
