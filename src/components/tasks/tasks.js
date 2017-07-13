import angular from 'angular';
import uiRouter from 'angular-ui-router';
import TasksComponent from './tasks.component';

const tasksModule = angular.module('tasks', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('tasks', {
        url: '/',
        template: '<tasks></tasks>'
      });
  })

  .component('tasks', TasksComponent);

export default tasksModule;