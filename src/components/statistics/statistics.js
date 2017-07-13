import angular from 'angular';
import uiRouter from 'angular-ui-router';
import StatsComponent from './statistics.component';

const statsModule = angular.module('stats', [
  uiRouter,
  'chart.js'
])

  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/tasks');
    
    $stateProvider
      .state('stats', {
        url: '/stats',
        template: '<stats></stats>'
      });
  })

  .component('stats', StatsComponent);

export default statsModule;