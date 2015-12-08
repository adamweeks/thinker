class GameObject {
    constructor() {
        this.gameID = false;
        this.question = 'This is a default question for now?';
        this.answer = false;
        this.inProgress = false;
        this.creator = false;
        this.guessers = [
            {
                user: false,
                guess: false,
            },
            {
                user: false,
                guess: false,
            },
        ];
    }
}

class GameService {
    constructor(UserService) {
        this.UserService = UserService;
        this.currentGame = false;
    }

    loadGame(gameID) {
        let game = this.currentGame;
        if (!game) {
            game = this.defaultGame(gameID);
            this.currentGame = game;
        }
        return Promise.resolve(game);
    }

    createGame(gameQuestion) {
        this.currentGame = this.defaultGame(false, gameQuestion);
        return Promise.resolve(this.currentGame);
    }

    defaultGame(gameID, gameQuestion) {
        const game = new GameObject();
        game.gameID = gameID ? gameID : 'abcd1234';
        game.creator = this.UserService.currentUser.userID;
        game.inProgress = true;
        game.question = gameQuestion ? gameQuestion : 'This is a default question for now?';

        // Guesser 1 is always the creator of the game
        game.guessers[0].user =
        {
            'id': this.UserService.currentUser.userID,
            'name': 'Me',
        };
        return game;
    }

    saveAnswer(answer) {
        this.currentGame.answer = answer;
    }
}

GameService.$inject = ['UserService'];

export default GameService;
