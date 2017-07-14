export default class AppController {

	constructor($scope, $location, localStorageService) {
		this.$scope = $scope;
		this.$location = $location;
		this.localStorageService = localStorageService;

		// const localStorageDefaultData = {
		// 	categories:[{
		// 		name: 'Health',
		// 		icon: 'glyphicon-heart'
		// 	},{
		// 		name: 'Career',
		// 		icon: 'glyphicon-screenshot'
		// 	},{
		// 		name: 'Travelling',
		// 		icon: 'glyphicon-plane'
		// 	}],
		// 	tasks:[]
		// }

		// if(localStorageService.isSupported) {
		// 	this.localStorageService.set("iAchivement", angular.toJson(localStorageDefaultData));
		// }
	}

	getClass(path){
		return (this.$location.path().substr(0, path.length) === path) ? 'active' : '';
	}
}