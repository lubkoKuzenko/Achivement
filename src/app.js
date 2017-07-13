import $ from 'jquery';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import Bootstrap from 'angular-ui-bootstrap';
import 'angular-local-storage/dist/angular-local-storage';

// Lodash.js
import 'ng-lodash/build/ng-lodash';

// Chart.js
import 'chart.js/dist/Chart.js';
import 'angular-chart.js/dist/angular-chart.js';

// main app component
import AppComponent from './app.component';

import './components/';
import './services';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-bootstrap/ui-bootstrap-csp.css';

import './styles.scss';

angular
  .module('myApp', [
    uiRouter,
    ngAnimate,
    Bootstrap,
    'ngLodash',
    'LocalStorageModule',
    'services',
    'app.components'
  ])
  .directive('app', AppComponent);