import * as angular from 'angular';
import Game from './game/components';
import Home from './home/home.component';
import Invite from './invite/invite.component';
import Login from './login/login.component';
import Toolbar from './toolbar/toolbar';

const componentModule = angular.module('thinker.components', [
    Game.name,
    Home.name,
    Invite.name,
    Login.name,
    Toolbar.name,
]);

export default componentModule;
