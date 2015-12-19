import template from './history.html';
import controller from './history.controller';

const historyComponent = () => {
    return {
        restrict: 'E',
        scope: {
            game: '=',
        },
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true,
    };
};

export default historyComponent;
