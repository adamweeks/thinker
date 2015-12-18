import template from './gameOver.html';
import controller from './gameOver.controller';

const gameOverComponent = () => {
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

export default gameOverComponent;
