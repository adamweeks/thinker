import template from './guesser.html';
import controller from './guesser.controller';

const guesserComponent = () => {
    return {
        restrict: 'E',
        scope: {
            game: '=',
            guesserNumber: '=',
        },
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true,
    };
};

export default guesserComponent;
