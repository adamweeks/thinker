import template from './guesser.html';
import controller from './guesser.controller';

let guesserComponent = function() {
    return {
        restrict: 'E',
        scope: {
            game: '=',
            guesser: '=',
        },
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true,
    };
};

export default guesserComponent;
