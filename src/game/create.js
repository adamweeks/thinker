class CreateGameController {
    constructor($state, GameService) {
        this.name = 'CreateGameController';
        this.$state = $state;
        this.GameService = GameService;
    }

    createGame() {
        const state = this.$state;

        const gameCreated = (game) => {
            state.go('game', {gameID: game.gameID});
        };

        this.GameService.createGame(this.questionText).then(gameCreated);
    }
}

CreateGameController.$inject = ['$state', 'GameService'];

export default CreateGameController;
