class GameController {
    constructor($stateParams, GameService) {
        this.GameService = GameService;
        this.name = 'GameController';
        this.gameID = $stateParams.gameID;
        this.gameLoaded = false;
        this.loadGame(this.gameID);
    }

    loadGame() {
        const self = this;
        this.GameService.loadGame(this.gameID).then(function gameLoaded(game) {
            self.game = game;
            self.gameLoaded = true;
        });
    }
}

GameController.$inject = ['$stateParams', 'GameService'];

export default GameController;
