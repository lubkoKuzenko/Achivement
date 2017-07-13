export default class AppController {

	constructor($scope, $location) {
		this.$scope = $scope;
		this.$location = $location;
	}

	getClass(path){
		return (this.$location.path().substr(0, path.length) === path) ? 'active' : '';
	}
}