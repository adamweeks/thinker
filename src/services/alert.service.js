import '../sounds/alert.wav';

class AlertService {
    constructor() {
        this.Notification = window.Notification || window.mozNotification || window.webkitNotification;
        this.hasPermission = this.Notification.permission === 'granted';
    }

    playAlertSound() {
        const audio = new Audio('media/alert.wav');
        audio.play();
    }

    pushAlert(alertText) {
        const notification = new this.Notification(alertText);
        return notification;
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

export default AlertService;
