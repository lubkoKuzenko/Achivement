export default class CompletedController {

	constructor($scope, $timeout, localStorageService, lodash) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.localStorageService = localStorageService;

		this.tasks = lodash.filter(angular.fromJson(this.localStorageService.get("iAchivement")).tasks, o => { return o.progress === 100 })
	}
}