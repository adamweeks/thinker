class CreateGameController {
    constructor($state, GameService, UserService) {
        this.name = 'CreateGameController';
        this.$state = $state;
        this.GameService = GameService;
        this.UserService = UserService;

        this.activate();
    }

    activate() {
        this.sampleQuestions = [
            'How many countries do you think border the Pacific Ocean?',
            'How many elephants are currently in existence?',
            'What amount of time, in minutes, would it take to eat 3 dozen donuts?',
        ];
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
