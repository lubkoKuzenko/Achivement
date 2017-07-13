import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CompletedComponent from './completed.component';

const CompletedModule = angular.module('completed', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('completed', {
        url: '/completed',
        template: '<completed></completed>'
      });
  })

  .component('completed', CompletedComponent);

export default CompletedModule;