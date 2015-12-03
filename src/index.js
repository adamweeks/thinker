// Vendor
import * as angular from 'angular';
import 'angular-ui-router';

// Style
import '../node_modules/materialize-css/sass/materialize.scss';

// Config
import Config from './config';

const ngModule = angular.module('thinker.app',
	['ui.router']);

ngModule.config(Config);
