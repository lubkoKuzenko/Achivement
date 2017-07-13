import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CategoriesComponent from './categories.component';

const CategoriesModule = angular.module('categories', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/tasks');
    
    $stateProvider
      .state('categories', {
        url: '/categories',
        template: '<categories></categories>'
      });
  })

  .component('categories', CategoriesComponent);

export default CategoriesModule;