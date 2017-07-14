export default class TasksController {
	constructor($scope, $timeout, UpdateLocalStorageService, lodash, $location) {
		this.lodash = lodash;
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.$location = $location;
		this.UpdateLocalStorageService = UpdateLocalStorageService;

		const query = this.$location.search().name;

		this.tasks = this.lodash.filter(this.UpdateLocalStorageService.getTasks(), o => { 
			if(query === 'All' || !query){
				return o.progress !== 100;
			} else {
				return o.progress !== 100 && o.category === query;
			}
		})
	}

	onEditClick(){
		console.log("edit")
	}

	onDeleteClick(index){
		this.tasks = this.UpdateLocalStorageService.deleteLocalTasks(index);
	}

	onMinusClick(){
		console.log("minus")
	}

	onPlusClick(){
		console.log("plus")
	}
}