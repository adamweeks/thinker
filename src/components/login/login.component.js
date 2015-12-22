import * as angular from 'angular';

import template from './login.html';
import controller from './login';

const loginComponent = () => {
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

const loginComponentModule = angular.module('thinker.components.login', [

]);

loginComponentModule.directive('login', loginComponent);

export default loginComponentModule;
