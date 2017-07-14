import * as angular from 'angular';

export class UpdateLocalStorageService {

  constructor(localStorageService, lodash){
    this.localStorageService = localStorageService;
    this.lodash = lodash;
    this.localStorage = angular.fromJson(this.localStorageService.get("iAchivement"));

    if(!this.lodash.isNull(this.localStorage)){
      this.caterories = this.localStorage.categories;
		  this.tasks = this.localStorage.tasks;
    }
  }

  static factory() {
    let service = (localStorageService, lodash) => {
      return new UpdateLocalStorageService(localStorageService, lodash);
    }
    service.$inject = ['localStorageService', 'lodash'];
    return service;
  }

  getCategories(){
    return !this.lodash.isNull(this.localStorage) ? angular.fromJson(this.localStorageService.get("iAchivement")).categories : null;
  }

  getTasks(){
    return !this.lodash.isNull(this.localStorage) ? angular.fromJson(this.localStorageService.get("iAchivement")).tasks : null;
  }

  updateLocalCategories(newCategory){
    this.caterories.push(newCategory)
		this.putToLocalStorage();
  }

  addLocalTasks(newTask){
    this.tasks.push(newTask)
		this.putToLocalStorage();
  }

  deleteLocalTasks(index){
    this.tasks = this.lodash.filter(this.tasks, (o) => { 
			return !this.lodash.isEqual(o, this.tasks[index]); 
		});
		this.putToLocalStorage();
  }

  putToLocalStorage(){
    this.localStorageService.set("iAchivement", angular.toJson({
			categories: this.caterories,
			tasks: this.tasks
		}));
  }
}

angular
  .module('services')
  .factory('UpdateLocalStorageService', UpdateLocalStorageService.factory());