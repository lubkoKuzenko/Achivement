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
		// 	tasks:[
		// 		{
		// 			name: 'norway',
		// 			category: 'Travelling',
		// 			done: false,
		// 			progress: 30,
		// 			date: "12-01-2012"
		// 		},
		// 		{
		// 			name: 'senior developer',
		// 			category: 'Career',
		// 			done: true,
		// 			progress: 100,
		// 			date: "30-11-2017"
		// 		},
		// 		{
		// 			name: 'angularjs',
		// 			category: 'Career',
		// 			done: false,
		// 			progress: 50,
		// 			date: "22-11-2015"
		// 		}
		// 	]
		// }

		// if(localStorageService.isSupported) {
		// 	this.localStorageService.set("iAchivement", angular.toJson(localStorageDefaultData));
		// }
	}

	getClass(path){
		return (this.$location.path().substr(0, path.length) === path) ? 'active' : '';
	}
}