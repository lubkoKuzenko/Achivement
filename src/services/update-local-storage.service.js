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

  // -----------------------------------------
  // Getters
  // -----------------------------------------

  getCategories(){
    return !this.lodash.isNull(this.localStorage) ? angular.fromJson(this.localStorageService.get("iAchivement")).categories : null;
  }

  getTasks(){
    return !this.lodash.isNull(this.localStorage) ? angular.fromJson(this.localStorageService.get("iAchivement")).tasks : null;
  }

  // -----------------------------------------
  // Tasks
  // -----------------------------------------

  addLocalTasks(newTask){
    this.tasks.push(newTask)
		this.putToLocalStorage();
  }

  deleteLocalTasks(name){
    this.lodash.remove(this.tasks, n => {
      return n.name === name;
    });
    this.putToLocalStorage();
    return this.tasks
  }

  plusLocalTasks(name){
    this.lodash.find(this.tasks, o => { 
      if(o.name === name && o.progress !== o.goal){
        o.progress += 1;
      }
    });
    this.putToLocalStorage();
    return this.tasks;
  }

  minusLocalTasks(name){
    this.lodash.find(this.tasks, o => { 
      if(o.name === name && o.progress !== 0){
        o.progress -= 1;
      }
    });
    this.putToLocalStorage();
    return this.tasks;
  }

  // -----------------------------------------
  // Categories
  // -----------------------------------------

  addCategory(newCategory){
    if(!this.lodash.some(this.caterories, newCategory)){
      this.caterories.push(newCategory)
      this.putToLocalStorage();
    } else {
			alert("Category Exist")
		}
    return this.caterories;
  }

  removeCategory(name){
    this.lodash.remove(this.caterories, n => {
      return n.name === name;
    });
    this.putToLocalStorage();
    return this.caterories;
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