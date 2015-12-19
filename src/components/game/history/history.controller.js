class HistoryController {
    constructor(GameService, $mdMedia) {
        this.name = 'HistoryController';
        this.GameService = GameService;
        this.$mdMedia = $mdMedia;

        this.activate();
    }

    activate() {
        this.GameService.gameHistory(this.game).then((gameHistory) => {
            this.gameHistory = gameHistory;
        });
    }
}

HistoryController.$inject = ['GameService', '$mdMedia'];

export default HistoryController;
