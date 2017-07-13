import angular from 'angular';
import Tasks from './tasks/tasks';
import Completed from './completed/completed';
import Statistics from './statistics/statistics';
import Settings from './settings/settings';
import Categories from './categories/categories';
import addtask from './addtask/addtask';

export default angular.module('app.components', [
  Tasks.name,
  Completed.name,
  Statistics.name,
  Settings.name,
  Categories.name,
  addtask.name,
]);