class InviteController {
    constructor($state, $stateParams, GameService, UserService) {
        this.$state = $state;
        this.GameService = GameService;
        this.UserService = UserService;
        this.name = 'InviteController';

        this.gameID = $stateParams.gameID;
        this.role = $stateParams.role;

        this.isGameLoaded = false;
        this.loadGame(this.gameID);
    }

    loadGame() {
        this.GameService.loadGame(this.gameID).then((game) => {
            // If game is started, redirect to actual game
            if (game.started) {
                this.$state.go('game', {'gameID': game.gameID});
            } else if (this.GameService.userInGame(game, this.UserService.currentUser.user)) {
                this.$state.go('game', {'gameID': game.gameID});
            } else {
                // Game is not started and user can join
                this.isGameLoaded = true;
                this.game = game;
            }
        });
    }

    joinGame() {
        if (this.role === 'answerer') {
            this.answering = true;
            // this.game.answer.user = this.UserService.currentUser.user;
            // this.game.answer.value = false;
        } else if (this.role === 'guesser') {
            this.GameService.joinGuesser(this.game, 1, this.UserService.currentUser.user).then(() => {
                this.$state.go('game', {'gameID': this.game.gameID});
            });
        }
    }

    saveAnswer() {
        this.GameService.saveAnswer(this.game, this.questionAnswer).then(() => {
            this.$state.go('game', {'gameID': this.game.gameID});
        });
    }
}

InviteController.$inject = ['$state', '$stateParams', 'GameService', 'UserService'];

export default InviteController;
