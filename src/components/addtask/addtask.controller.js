export default class AddTaskController {
	constructor(UpdateLocalStorageService, $filter, $location) {
		this.UpdateLocalStorageService = UpdateLocalStorageService;
		this.$location = $location;
		
		this.maxCounterValue = 10;
		this.minCounterValue = 1;
		this.caterories = this.UpdateLocalStorageService.getCategories();
		this.user = {
			'name': '',
			'difficulty': 1,
			'category': this.caterories[0].name,
			'goal': 1,
			'progress': 0,
			'date': $filter('date')(new Date(), 'dd-MM-yyyy')
		}
	}

	onMinusClick(){
		this.user.goal = (this.user.goal === this.minCounterValue) ? this.minCounterValue : this.user.goal - 1;		
	}

	onPlusClick(){
		this.user.goal = (this.user.goal === this.maxCounterValue) ? this.maxCounterValue : this.user.goal + 1;		
	}

	onSubmit(){
		this.UpdateLocalStorageService.addLocalTasks(this.user);
		this.$location.path("/tasks");
	}
}