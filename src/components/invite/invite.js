class InviteController {
    constructor($state, $stateParams, $window, GameService, UserService) {
        this.$state = $state;
        this.$window = $window;
        this.GameService = GameService;
        this.UserService = UserService;
        this.name = 'InviteController';

        this.gameID = $stateParams.gameID;
        this.role = $stateParams.role;

        this.roles = {
            answerer: 'answerer',
            guesser: 'guesser',
        };

        this.isGameLoaded = false;
        this.loadGame(this.gameID);
    }

    loadGame() {
        this.GameService.loadGame(this.gameID).then((game) => {
            if (this.userCanJoinGame(game, this.UserService.currentUser.user, this.role)) {
                this.isGameLoaded = true;
                this.game = game;
            } else {
                this.$state.go('game', {'gameID': game.gameID});
            }
        });
    }

    userCanJoinGame(game, user, role) {
        let canJoin = true;
        // If game is started, redirect to actual game
        if (game.started) {
            canJoin = false;
        } else if (this.GameService.userInGame(game, user)) {
            canJoin = false;
        } else if (!this.gameSpotAvailable(game, role)) {
            canJoin = false;
        }

        return canJoin;
    }

    gameSpotAvailable(game, role) {
        let available = false;

        if (role === this.roles.answerer) {
            available = !game.answer.user;
        } else if (role === this.roles.guesser) {
            available = !game.guessers[1].user;
        }

        return available;
    }

    joinGame() {
        if (this.gameSpotAvailable(this.game, this.role)) {
            if (this.role === 'answerer') {
                this.answering = true;
                // this.game.answer.user = this.UserService.currentUser.user;
                // this.game.answer.value = false;
            } else if (this.role === 'guesser') {
                this.GameService.joinGuesser(this.game, 1, this.UserService.currentUser.user).then(() => {
                    this.$state.go('game', {'gameID': this.game.gameID});
                });
            }
        } else {
            this.noLongerAvailable();
        }
    }

    noLongerAvailable() {
        this.$window.alert('Spot no longer available!');
        this.$state.go('game', {'gameID': this.game.gameID});
    }

    saveAnswer() {
        if (this.gameSpotAvailable(this.game, this.role)) {
            this.GameService.saveAnswer(this.game, this.questionAnswer).then(() => {
                this.$state.go('game', {'gameID': this.game.gameID});
            });
        } else {
            this.noLongerAvailable();
        }
    }
}

InviteController.$inject = ['$state', '$stateParams', '$window', 'GameService', 'UserService'];

export default InviteController;
