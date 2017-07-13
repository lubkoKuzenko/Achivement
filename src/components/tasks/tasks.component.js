import template from './tasks.html';
import controller from './tasks.controller';

let TasksComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default TasksComponent;