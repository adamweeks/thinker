import '../sounds/alert.wav';

class AlertService {
    constructor($window) {
        this.$window = $window;
        this.Notification = $window.Notification || $window.mozNotification || $window.webkitNotification;
        this.hasPermission = this.Notification.permission === 'granted';
        this.isWindowActive = true;

        this.$window.onblur = () => {
            this.isWindowActive = false;
        };
        this.$window.onfocus = () => {
            this.isWindowActive = true;
        };
    }

    playAlertSound() {
        const audio = new Audio('media/alert.wav');
        audio.play();
    }

    pushAlert(alertText) {
        if (this.isWindowActive) {
            const notification = new this.Notification(alertText);
            return notification;
        }
    }

    requestNotificationPermission() {
        return new Promise((resolve) => {
            if (this.hasPermission) {
                resolve(true);
            } else {
                this.Notification.requestPermission((result) => {
                    if (result === 'denied') {
                        resolve(false);
                    } else if (result === 'default') {
                        resolve(false);
                    } else {
                        this.hasPermission = true;
                        resolve(true);
                    }
                });
            }
        });
    }
}

AlertService.$inject = ['$window'];

export default AlertService;
