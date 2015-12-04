class CreateGameController {
    constructor($state) {
        this.name = 'CreateGameController';
        this.$state = $state;
    }

    createGame() {
        this.$state.go('game', {gameID: 'abc123'});
    }
}

CreateGameController.$inject = ['$state'];

export default CreateGameController;
