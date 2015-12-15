class GuesserController {
    constructor(GameService, UserService) {
        this.name = 'GuesserController';
        this.GameService = GameService;
        this.UserService = UserService;
        this.guesser = this.game.guessers[this.guesserNumber];
    }

    joinAsGuesser() {
        this.game.guessers[this.guesserNumber].user = this.UserService.currentUser.user;
        this.guesser.user = this.UserService.currentUser.user;
        this.game.$save();
    }
}

GuesserController.$inject = ['GameService', 'UserService'];

export default GuesserController;
