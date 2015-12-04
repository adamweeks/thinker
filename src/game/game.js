class GameController {
    constructor($stateParams) {
        this.name = 'GameController';
        this.gameID = $stateParams.gameID;
    }
}

GameController.$inject = ['$stateParams'];

export default GameController;
