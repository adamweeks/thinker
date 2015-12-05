class GameController {
    constructor($stateParams) {
        this.name = 'GameController';
        this.gameID = $stateParams.gameID;
        this.loadGame();
    }

    loadGame() {
        this.game = {
            gameID: this.gameID,
            name: 'whatever',
            question: 'what is the question?'};
    }
}

GameController.$inject = ['$stateParams'];

export default GameController;
