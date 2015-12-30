class GameHistoryObject {
    constructor(user, event, timestamp) {
        this.user = user;
        this.event = event;
        this.timestamp = timestamp;
    }
}

class GameObject {
    constructor() {
        this.gameID = false;
        this.question = 'This is a default question for now?';
        this.answer = {
            user: false,
            value: false,
        };
        this.inProgress = false; // Game not ended
        this.started = false; // Has all users and is being played
        this.creator = false;
        this.winner = false;
        this.winningGuess = false;
        this.currentGuess = 0;
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
    constructor(UserService, FirebaseService, $state) {
        this.UserService = UserService;
        this.FirebaseService = FirebaseService;
        this.$state = $state;
    }

    loadGame(gameID) {
        return this.FirebaseService.loadGame(gameID);
    }

    createGame(gameQuestion) {
        const currentGame = this.buildNewGame(gameQuestion);
        return this.FirebaseService
            .createNewGame(currentGame)
            .then((game) => {
                game.gameID = game.$id;
                game.$save();
                return game;
            })
            .then((game) => {
                this.addHistoryToGame(game, this.UserService.currentUser.user, 'Created Game');
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
        this.addHistoryToGame(game, this.UserService.currentUser.user, 'Answered question.');
        return this.stepGame(game);
    }

    userInGame(game, user) {
        let inGame = false;

        if (user) {
            // Guessers cannot answer
            const guesserIsUser = (guesser) => {
                return guesser.user.userID === user.userID;
            };

            if (!game.guessers.some(guesserIsUser)) {
                if (game.answer.user && game.answer.user.userID === user.userID) {
                    inGame = true;
                }
            } else {
                // User is a guesser
                inGame = true;
            }
        }
        return inGame;
    }

    guesserObject(game, guesserNumber) {
        return this.FirebaseService.guesserObject(game, guesserNumber);
    }

    joinGuesser(game, guesserNumber, user) {
        game.guessers[guesserNumber].user = user;
        this.addHistoryToGame(game, user, 'Joined as guesser');
        return this.stepGame(game);
    }

    activeUserForGame(game) {
        return game.guessers.find((guesser) => {
            return guesser.active;
        });
    }

    /**
     * Value in guess is updated, change active guesser to next
     */
    saveGuess(game, guesserNumber, guess) {
        const currentGuesser = game.guessers[guesserNumber];
        const nextGuesserNumber = guesserNumber === 0 ? 1 : 0;
        const nextGuesser = game.guessers[nextGuesserNumber];
        currentGuesser.active = false;
        currentGuesser.guess = guess;
        nextGuesser.active = true;
        game.currentGuess = guess;
        this.addHistoryToGame(game, currentGuesser.user, 'Guessed: ' + guess);
        return game.$save();
    }

    guessLower(game, guesserNumber) {
        const currentGuesser = game.guessers[guesserNumber];
        const lastGuesserNumber = guesserNumber === 0 ? 1 : 0;
        const lastGuesser = game.guessers[lastGuesserNumber];
        this.addHistoryToGame(game, currentGuesser.user, 'Guessed lower than ' + game.currentGuess);
        if (game.answer.value < game.currentGuess) {
            game.winner = currentGuesser;
            game.winningGuess = 'Lower than ' + game.currentGuess;
        } else {
            game.winner = lastGuesser;
            game.winngingGuess = 'Guess of ' + game.currentGuess;
        }
        this.addHistoryToGame(game, game.winner.user, 'Won with: ' + game.winningGuess);
        return this.endGame(game);
    }

    /**
     * Progress the game to the next step after an action has occurred
     */
    stepGame(game) {
        let returnGame;
        if (game.started) {
            // TODO: Figure out whose turn it is and activate them
            returnGame = game.$save();
        } else if (game.answer.value && game.guessers[0].user && game.guessers[1].user) {
            // Game is ready to start
            returnGame = this.startGame(game);
        } else {
            returnGame = game.$save();
        }
        return returnGame;
    }

    startGame(game) {
        // Sanity check
        if (game.answer.value && game.guessers[0].user && game.guessers[1].user) {
            game.guessers[0].active = true;
            game.started = true;
        }
        return game.$save();
    }

    endGame(game) {
        game.guessers.forEach((guesser) => {
            guesser.active = false;
        });
        game.inProgress = false;
        return game.$save();
    }

    gameHistory(game) {
        return this.FirebaseService
            .gameHistory(game);
    }

    addHistoryToGame(game, user, event) {
        const timestamp = this.FirebaseService.timestamp;
        const historyItem = new GameHistoryObject(user, event, timestamp);
        return this.gameHistory(game)
            .then((gameHistory) => {
                return gameHistory.$add(historyItem);
            });
    }

    inviteLink(game, type) {
        return this.$state.href('invite', {'gameID': game.$id, 'role': type}, {absolute: true});
    }

    inviteAnswererLink(game) {
        return this.inviteLink(game, 'answerer');
    }

    inviteGuesserLink(game) {
        return this.inviteLink(game, 'guesser');
    }
}

GameService.$inject = ['UserService', 'FirebaseService', '$state'];

export default GameService;
