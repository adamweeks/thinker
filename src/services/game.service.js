class GameObject {
    constructor() {
        this.gameID = false;
        this.question = 'This is a default question for now?';
        this.answer = {
            user: false,
            value: false,
        };
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
        game.creator = this.UserService.currentUser.user;
        game.inProgress = true;
        game.question = gameQuestion;

        // Guesser 1 is always the creator of the game
        game.guessers[0].user = this.UserService.currentUser.user;
        return game;
    }

    saveAnswer(game, answer) {
        game.answer.value = answer;
        game.answer.user = this.UserService.currentUser.user;
        return game.$save();
    }

    /**
     * Determines if a user can answer a question.
     * Rules: User must be logged in, user may not be a guesser,
     * answer can either have no user or passed user.
     */
    userCanAnswer(game, user) {
        let canAnswer = false;

        if (user) {
            // Guessers cannot answer
            const guesserIsUser = (guesser) => {
                return guesser.user.userID === user.userID;
            };

            if (!game.guessers.some(guesserIsUser)) {
                if (!game.answer.user) {
                    canAnswer = true;
                } else if (game.answer.user.userID === user.userID) {
                    canAnswer = true;
                }
            }
        }

        return canAnswer;
    }
}

GameService.$inject = ['UserService', 'FirebaseService'];

export default GameService;
