import $ from 'jquery';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import Bootstrap from 'angular-ui-bootstrap';

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
    'services',
    'app.components'
  ])
  .directive('app', AppComponent);