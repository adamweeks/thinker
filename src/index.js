// Vendor
import * as angular from 'angular';
import 'angular-ui-router';
import jquery from 'jquery';
import material from 'angular-material';

// Style
import '../node_modules/angular-material/angular-material.css';


// Config
import Config from './config';

// Components
import Components from './components/components';

const ngModule = angular.module('thinker.app',
	['ui.router',
    'ngMaterial',
    Components.name,
    ]);

ngModule.config(Config);
