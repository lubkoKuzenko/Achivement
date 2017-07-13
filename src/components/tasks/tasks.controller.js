export default class TasksController {
	constructor($scope, $timeout, localStorageService, lodash, $location) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.$location = $location;
		this.localStorageService = localStorageService;

		const data = angular.fromJson(this.localStorageService.get("iAchivement"));
		const query = this.$location.search().name;

		this.tasks = lodash.filter(data.tasks, o => { 
			if(query === 'All' || !query){
				return o.progress !== 100;
			} else {
				return o.progress !== 100 && o.category === query;
			}
		})
		this.icon = data.categories.icon;
	}

	onEditClick(){
		console.log("edit")
	}

	onMinusClick(){
		console.log("minus")
	}

	onPlusClick(){
		console.log("plus")
	}
}