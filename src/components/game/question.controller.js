class QuestionController {
    constructor(GameService) {
        this.name = 'QuestionController';
        this.GameService = GameService;
    }

    saveAnswer() {
        this.GameService.saveAnswer(this.questionAnswer);
    }
}

QuestionController.$inject = ['GameService'];

export default QuestionController;
