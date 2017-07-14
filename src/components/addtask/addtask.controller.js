export default class AddTaskController {
	constructor(UpdateLocalStorageService, $filter) {
		this.UpdateLocalStorageService = UpdateLocalStorageService;
		
		this.maxCounterValue = 10;
		this.minCounterValue = 1;
		this.caterories = this.UpdateLocalStorageService.getCategories();
		this.user = {
			'name': '',
			'difficulty': 1,
			'category': this.caterories[0].name,
			'counter': 1,
			'done': false,
			'progress': 0,
			'date': $filter('date')(new Date(), 'dd-MM-yyyy')
		}
	}

	onMinusClick(){
		this.user.counter = (this.user.counter === this.minCounterValue) ? this.minCounterValue : this.user.counter - 1;		
	}

	onPlusClick(){
		this.user.counter = (this.user.counter === this.maxCounterValue) ? this.maxCounterValue : this.user.counter + 1;		
	}

	onSubmit(){
		this.UpdateLocalStorageService.updateLocalTasks(this.user);
	}
}