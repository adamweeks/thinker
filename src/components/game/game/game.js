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
        };

        this.GameService.loadGame(this.gameID).then(gameLoaded);
    }
}

GameController.$inject = ['$stateParams', 'GameService', 'UserService', 'AlertService'];

export default GameController;
