import * as angular from 'angular';

import routes from './home.routes';

import homeComponent from './home';
import subComponent from './subcomponent/subcomponent';
import { HomeService } from './home.service';

export default angular.module('home', [])
    .config(routes)
    .component("home", homeComponent)
    .component("subComponent", subComponent)
    .service('homeService', HomeService).name;