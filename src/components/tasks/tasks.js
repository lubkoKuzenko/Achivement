import angular from 'angular';
import uiRouter from 'angular-ui-router';
import TasksComponent from './tasks.component';

const tasksModule = angular.module('tasks', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/tasks');

    $stateProvider
      .state('tasks', {
        url: '/tasks',
        template: '<tasks></tasks>'
      });
  })

  .component('tasks', TasksComponent);

export default tasksModule;