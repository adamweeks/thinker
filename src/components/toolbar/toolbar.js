import * as angular from 'angular';
import toolbarComponent from './toolbar.component';

const toolbarComponentModule = angular.module('thinker.components.toolbar', [

]);

toolbarComponentModule.directive('thinkerToolbar', toolbarComponent);

export default toolbarComponentModule;
