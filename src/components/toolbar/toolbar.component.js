import template from './toolbar.html';
import controller from './toolbar.controller';

const toolbarComponent = () => {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true,
    };
};

export default toolbarComponent;
