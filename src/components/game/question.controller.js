class QuestionController {
    constructor(GameService, UserService) {
        this.name = 'QuestionController';
        this.GameService = GameService;
        this.UserService = UserService;

        this.activate();
    }

    saveAnswer() {
        this.GameService.saveAnswer(this.game, this.questionAnswer);
    }

    activate() {
        this.canAnswer = !this.GameService.userInGame(this.game, this.UserService.currentUser.user);
    }

    startAnswer() {
        if (!this.GameService.userInGame(this.game, this.UserService.currentUser.user)) {
            this.answering = true;
        }
    }
}

QuestionController.$inject = ['GameService', 'UserService'];

export default QuestionController;
