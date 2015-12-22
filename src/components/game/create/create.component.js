import template from './create.html';
import controller from './create.controller';

const createComponent = () => {
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

export default createComponent;
