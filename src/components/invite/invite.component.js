import * as angular from 'angular';

import template from './invite.html';
import controller from './invite';

const inviteComponent = () => {
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


const inviteComponentModule = angular.module('thinker.components.invite', [

]);

inviteComponentModule.directive('invite', inviteComponent);

export default inviteComponentModule;
