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
    constructor(UserService, FirebaseService) {
        this.UserService = UserService;
        this.FirebaseService = FirebaseService;
    }

    loadGame(gameID) {
        return this.FirebaseService.loadGame(gameID);
    }

    createGame(gameQuestion) {
        const currentGame = this.buildNewGame(gameQuestion);
        return this.FirebaseService.createNewGame(currentGame).then((gameID) => {
            currentGame.gameID = gameID;
            return currentGame;
        });
    }

    buildNewGame(gameQuestion) {
        const game = new GameObject();
        game.creator = this.UserService.currentUser.user.userID;
        game.inProgress = true;
        game.question = gameQuestion;

        // Guesser 1 is always the creator of the game
        game.guessers[0].user =
        {
            'id': this.UserService.currentUser.user.userID,
            'name': 'Me',
        };
        return game;
    }

    saveAnswer(game, answer) {
        game.answer = answer;
    }
}

GameService.$inject = ['UserService', 'FirebaseService'];

export default GameService;
