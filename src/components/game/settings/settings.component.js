import template from './settings.html';
import controller from './settings.controller';

const settingsComponent = () => {
    return {
        restrict: 'E',
        scope: {
            gameSettings: '=',
        },
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true,
    };
};

export default settingsComponent;
