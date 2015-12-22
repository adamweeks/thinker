import template from './lobby.html';
import controller from './lobby';

const lobbyComponent = () => {
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

export default lobbyComponent;
