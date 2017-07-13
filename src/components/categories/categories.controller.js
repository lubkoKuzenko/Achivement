export default class CategoriesController {
	constructor($scope, $timeout, localStorageService, $location, $stateParams) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.$location = $location;
		this.localStorageService = localStorageService;
		this.$stateParams = $stateParams;

		this.caterories = angular.fromJson(this.localStorageService.get("iAchivement")).categories;
	}

	onCategoryClick(name){
		this.$stateParams.name = name;
		this.$location.path("/tasks").search(this.$stateParams);
	}
}