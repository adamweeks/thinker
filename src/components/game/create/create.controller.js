class CreateGameController {
    constructor($state, GameService, UserService) {
        this.name = 'CreateGameController';
        this.$state = $state;
        this.GameService = GameService;
        this.UserService = UserService;

        this.activate();
    }

    activate() {

    }

    createGame() {
        const state = this.$state;

        const gameCreated = (game) => {
            state.go('game', {gameID: game.gameID});
        };

        this.GameService.createGame(this.questionText).then(gameCreated);
    }
}

CreateGameController.$inject = ['$state', 'GameService', 'UserService'];

export default CreateGameController;
