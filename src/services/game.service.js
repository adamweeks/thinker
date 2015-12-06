class GameService {
    constructor() {
        this.currentGame = {
            question: 'This is a default question for now?',
            answer: false,
            guessers: [
                {
                    user: false,
                    guess: false,
                },
                {
                    user: false,
                    guess: false,
                },
            ],
        };
    }

    saveAnswer(answer) {
        this.currentGame.answer = answer;
    }
}

export default GameService;
