import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SettingsComponent from './settings.component';

const SettingsModule = angular.module('settings', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('settings', {
        url: '/settings',
        template: '<settings></settings>'
      });
  })

  .component('settings', SettingsComponent);

export default SettingsModule;