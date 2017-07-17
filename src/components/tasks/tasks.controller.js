export default class TasksController {
	constructor($scope, $timeout, UpdateLocalStorageService, lodash, $location) {
		this.lodash = lodash;
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.$location = $location;
		this.UpdateLocalStorageService = UpdateLocalStorageService;

		this.tasks = this._filterTasks();
		this.colorSettings = this.UpdateLocalStorageService.getActiveColorSettings();
		this.gredient = 'linear-gradient(to right, #:from 35%, #:to 68%)'.replace(':from', this.colorSettings[0].from).replace(':to', this.colorSettings[0].to);
		console.log(this.gredient)
	}

	_filterTasks(){
		const query = this.$location.search().name;
		return this.lodash.sortByAll(this.lodash.filter(this.UpdateLocalStorageService.getTasks(), o => { 
			if(query === 'All' || !query){
				return o.progress !== o.goal;
			} else {
				return o.progress !== o.goal && o.category === query;
			}
		}), ['difficulty'], ['asc'])
	}

	onEditClick(name){
		console.log(this.tasks)
	}

	onDeleteClick(name){
		this.tasks = this.UpdateLocalStorageService.deleteLocalTasks(name);
		this.tasks = this._filterTasks();
	}

	onMinusClick(name){
		this.UpdateLocalStorageService.minusLocalTasks(name);
		this.tasks = this._filterTasks();
	}

	onPlusClick(name){
		this.UpdateLocalStorageService.plusLocalTasks(name);
		this.tasks = this._filterTasks();
	}
}