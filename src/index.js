// Vendor
import * as angular from 'angular';
import 'angular-ui-router';
import 'jquery';
import 'angular-material';

// Style
import '../node_modules/angular-material/angular-material.css';

// Config
import Config from './config';

// Components
import Components from './components/components';

import Services from './services/services';

const ngModule = angular.module('thinker.app',
	['ui.router',
    'ngMaterial',
    Components.name,
    Services.name,
    ]);

ngModule.config(Config);
