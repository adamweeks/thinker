class GuesserController {
    constructor(GameService) {
        this.name = 'GuesserController';
        this.GameService = GameService;
    }
}

GuesserController.$inject = ['GameService'];

export default GuesserController;
