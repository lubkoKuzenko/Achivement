import * as angular from 'angular';

export class UpdateLocalStorageService {

  constructor(localStorageService){
    this.localStorageService = localStorageService;
    this.localStorage = angular.fromJson(this.localStorageService.get("iAchivement"));

    this.caterories = this.localStorage.categories;
		this.tasks = this.localStorage.tasks;
  }

  static factory() {
    let service = (localStorageService) => {
      return new UpdateLocalStorageService(localStorageService);
    }
    service.$inject = ['localStorageService'];
    return service;
  }

  getCategories(){
    return angular.fromJson(this.localStorageService.get("iAchivement")).categories;
  }

  getTasks(){
    return angular.fromJson(this.localStorageService.get("iAchivement")).tasks;
  }

  updateLocalCategories(newCategory){
    this.caterories.push(newCategory)
		this.putToLocalStorage();
  }

  updateLocalTasks(newTask){
    this.tasks.push(newTask)
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