class GameService {
    constructor() {
        this.currentGame = {
            question: false,
            answer: false,
            guessers: [
                false,
                false,
            ],
        };
    }
}

export default GameService;
