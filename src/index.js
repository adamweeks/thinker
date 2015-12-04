// Vendor
import * as angular from 'angular';
import 'angular-ui-router';
import jquery from 'jquery';
import 'expose?Hammer!hammerjs/hammer';
import '../node_modules/materialize-css/dist/js/materialize.js';

// Style
import '../node_modules/materialize-css/sass/materialize.scss';


// Config
import Config from './config';

const ngModule = angular.module('thinker.app',
	['ui.router']);

ngModule.config(Config);
