import template from './board.html';
import controller from './board.controller';

const gameBoardComponent = () => {
    return {
        restrict: 'E',
        scope: {
            game: '=',
            gameSettings: '=',
        },
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true,
    };
};

export default gameBoardComponent;
