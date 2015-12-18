class GuesserController {
    constructor(GameService, UserService) {
        this.name = 'GuesserController';
        this.GameService = GameService;
        this.UserService = UserService;

        this.activate();
    }

    activate() {
        this.GameService.guesserObject(this.game, this.guesserNumber).then((guesser) => {
            this.guesser = guesser;
        });
        this.canJoin = !this.GameService.userInGame(this.game, this.UserService.currentUser.user);
    }

    joinAsGuesser() {
        this.game.guessers[this.guesserNumber].user = this.UserService.currentUser.user;
        this.guesser.user = this.UserService.currentUser.user;
        return this.GameService.stepGame(this.game);
    }

    saveGuess() {
        return this.GameService.saveGuess(this.game, this.guesserNumber, this.guess).then(() => {
            this.guess = false;
            this.guesser.active = false;
        });
    }

    lowerGuess() {
        this.GameService.guessLower(this.game, this.guesserNumber).then(() => {
            this.guesser.active = false;
        });
    }
}

GuesserController.$inject = ['GameService', 'UserService'];

export default GuesserController;
