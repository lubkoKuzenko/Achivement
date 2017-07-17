export default class SettingsController {
	constructor($scope, $timeout, UpdateLocalStorageService) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.UpdateLocalStorageService = UpdateLocalStorageService;

		this.caterories = this.UpdateLocalStorageService.getCategories();
	}	

	onRemoveClick(name){
		this.caterories = this.UpdateLocalStorageService.removeCategory(name);
	}

	onSubmit(){
		this.category = {
			'name': this.category.name,
			'icon': 'glyphicon-heart'
		}
		this.caterories = this.UpdateLocalStorageService.addCategory(this.category);
		this.category = {}
	}
}