import template from './question.html';
import controller from './question.controller';

let questionComponent = function() {
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

export default questionComponent;