export default class CompletedController {

	constructor($scope, $timeout, UpdateLocalStorageService, lodash) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.UpdateLocalStorageService = UpdateLocalStorageService;

		this.tasks = lodash.filter(angular.fromJson(this.UpdateLocalStorageService.getTasks(), o => { return o.progress === 100 }))
	}
}