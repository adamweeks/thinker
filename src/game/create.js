class CreateGameController {
    constructor($state, GameService) {
        this.name = 'CreateGameController';
        this.$state = $state;
        this.GameService = GameService;
    }

    createGame() {
        this.GameService.currentGame.question = this.questionText;
        this.$state.go('game', {gameID: 'abc123'});
    }
}

CreateGameController.$inject = ['$state', 'GameService'];

export default CreateGameController;
