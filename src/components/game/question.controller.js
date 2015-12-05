class QuestionController {
    constructor(GameService) {
        this.name = 'QuestionController';
        this.GameService = GameService;
    }
}

QuestionController.$inject = ['GameService'];

export default QuestionController;
