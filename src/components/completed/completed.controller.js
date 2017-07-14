export default class CompletedController {

	constructor($scope, $timeout, UpdateLocalStorageService, lodash) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.UpdateLocalStorageService = UpdateLocalStorageService;

		this.tasks = lodash.sortByAll(lodash.filter(this.UpdateLocalStorageService.getTasks(), o => { return o.progress === o.goal }), ['difficulty'], ['asc']);
	}
}