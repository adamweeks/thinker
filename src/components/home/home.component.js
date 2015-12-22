import * as angular from 'angular';

import template from './home.html';
import controller from './home';

const homeComponent = () => {
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

const homeComponentModule = angular.module('thinker.components.home', [

]);

homeComponentModule.directive('home', homeComponent);

export default homeComponentModule;
