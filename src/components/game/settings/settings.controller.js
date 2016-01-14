class SettingsController {
    constructor(AlertService, $timeout) {
        this.AlertService = AlertService;
        this.$timeout = $timeout;
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
                this.$timeout(() => {
                    this.notificationsEnabled = result;
                    this.gameSettings.notifications = result;
                });
            });
        }
        if (this.AlertService.hasPermission) {
            this.gameSettings.notifications = this.notificationsEnabled;
        }
    }
}

SettingsController.$inject = ['AlertService', '$timeout'];

export default SettingsController;
