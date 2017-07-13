import angular from 'angular';
import uiRouter from 'angular-ui-router';
import StatsComponent from './statistics.component';

const statsModule = angular.module('stats', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('stats', {
        url: '/stats',
        template: '<stats></stats>'
      });
  })

  .component('stats', StatsComponent);

export default statsModule;