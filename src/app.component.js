import template from './app.html';
import controller from './app.controller';

let appComponent = function() {
  return {
    template,
    scope: {},
    restrict: 'E',
    controller,
    controllerAs: 'vm'
  };
};

export default appComponent;