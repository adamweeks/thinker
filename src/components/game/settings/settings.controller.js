class SettingsController {
    constructor(AlertService) {
        this.AlertService = AlertService;
        this.name = 'SettingsController';
        this.activate();
    }

    activate() {
        this.notificationsEnabled = this.gameSettings.notifications;
    }

    notificationChanged() {
        if (!this.AlertService.hasPermission && this.notificationsEnabled) {
            this.notificationsEnabled = false;
            this.AlertService.requestNotificationPermission().then((result) => {
                this.notificationsEnabled = result;
                this.gameSettings.notifications = result;
            });
        }
        if (this.AlertService.hasPermission) {
            this.gameSettings.notifications = this.notificationsEnabled;
        }
    }
}

SettingsController.$inject = ['AlertService'];

export default SettingsController;
