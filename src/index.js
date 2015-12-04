// Vendor
import * as angular from 'angular';
import 'angular-ui-router';
import jquery from 'jquery';
import material from 'angular-material';

// Style
import '../node_modules/angular-material/angular-material.css';


// Config
import Config from './config';

const ngModule = angular.module('thinker.app',
	['ui.router',
    'ngMaterial']);

ngModule.config(Config);
