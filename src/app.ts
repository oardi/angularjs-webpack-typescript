import * as angular from 'angular';
import * as ngroute from 'angular-route';

import 'bootstrap/less/bootstrap.less';
import './assets/style.less';

import routes from './app.routes';

import homeModule from './app/home/home.module';

angular.module("app", [ngroute, homeModule]);
angular.module("app").config(routes);
angular.bootstrap(document, ["app"]);

//https://github.com/vsternbach/angularjs-typescript-webpack