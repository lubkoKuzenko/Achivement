import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AddTaskComponent from './addtask.component';

const AddTaskModule = angular.module('addtask', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('addtask', {
        url: '/addtask',
        template: '<addtask></addtask>'
      });
  })

  .component('addtask', AddTaskComponent);

export default AddTaskModule;