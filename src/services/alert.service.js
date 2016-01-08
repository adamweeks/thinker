import '../sounds/alert.wav';

class AlertService {
    playAlertSound() {
        const audio = new Audio('media/alert.wav');
        audio.play();
    }
}

export default AlertService;
