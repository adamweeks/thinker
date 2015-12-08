class GuesserController {
    constructor(GameService) {
        this.name = 'GuesserController';
        this.GameService = GameService;
        this.guesser = this.game.guessers[this.guesserNumber];
    }
}

GuesserController.$inject = ['GameService'];

export default GuesserController;
