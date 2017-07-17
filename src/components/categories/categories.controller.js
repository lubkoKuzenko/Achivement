export default class CategoriesController {
	constructor($scope, $timeout, UpdateLocalStorageService, $location, $stateParams) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.$location = $location;
		this.UpdateLocalStorageService = UpdateLocalStorageService;
		this.$stateParams = $stateParams;

		this.caterories = this.UpdateLocalStorageService.getCategories();
	}

	onCategoryClick(name){
		this.$stateParams.name = name;
		this.$location.path("/tasks").search(this.$stateParams);
	}
}