import template from './addtask.html';
import controller from './addtask.controller';

let AddTaskComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default AddTaskComponent;