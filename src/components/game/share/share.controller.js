class ShareController {
    constructor(GameService) {
        this.GameService = GameService;
        this.name = 'ShareController';
        this.activate();
    }

    activate() {
        this.gameLink = this.GameService.gameLink(this.game);
    }

    selectText($event) {
        $event.target.select();
    }
}

ShareController.$inject = ['GameService'];

export default ShareController;
