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
                active: false,
            },
            {
                user: false,
                guess: false,
                active: false,
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
        return this.FirebaseService.createNewGame(currentGame).then((game) => {
            game.gameID = game.$id;
            game.$save();
            return game;
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

    userInGame(game, user) {
        let inGame = false;

        if (user) {
            // Guessers cannot answer
            const guesserIsUser = (guesser) => {
                return guesser.user.userID === user.userID;
            };

            if (!game.guessers.some(guesserIsUser)) {
                if (!game.answer.user) {
                    inGame = true;
                } else if (game.answer.user.userID === user.userID) {
                    inGame = true;
                }
            }
        }
        return inGame;
    }

    guesserObject(game, guesserNumber) {
        return this.FirebaseService.guesserObject(game, guesserNumber);
    }
}

GameService.$inject = ['UserService', 'FirebaseService'];

export default GameService;
