import template from './game.html';
import controller from './game';

const gameComponent = () => {
    return {
        restrict: 'E',
        scope: {
        },
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true,
    };
};

export default gameComponent;
