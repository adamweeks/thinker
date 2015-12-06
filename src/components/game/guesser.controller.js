class GuesserController {
    constructor(GameService) {
        this.name = 'GuesserController';
        this.GameService = GameService;
        this.guesser = this.GameService.currentGame.guessers[this.guesserNumber];
    }
}

GuesserController.$inject = ['GameService'];

export default GuesserController;
