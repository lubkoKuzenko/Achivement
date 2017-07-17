export default class AppController {

	constructor($scope, $location, localStorageService, $filter) {
		this.$scope = $scope;
		this.$location = $location;
		this.$filter = $filter;
		this.localStorageService = localStorageService;

		const localStorageDefaultData = {
			categories:[{
				name: "Career",
				icon: "glyphicon-envelope"
			}],
			tasks:[{
				'name': 'First Task',
				'difficulty': 1,
				'category': "Career",
				'goal': 10,
				'progress': 1,
				'date': this.$filter('date')(new Date(), 'dd-MM-yyyy')
			}],
			colorSettings:[{
				name: "Green",
				bootstrapClass: 'success',
				from: '26ad5f',
				to: '087134',
				isActive: true
			},{
				name: "Blue",
				bootstrapClass: 'info',
				from: '3bc5e4',
				to: '3e3be4',
				isActive: false
			},{
				name: "Yellow",
				bootstrapClass: 'warning',
				from: 'ffff00',
				to: 'ffd700',
				isActive: false
			},{
				name: "Red",
				bootstrapClass: 'danger',
				from: 'ff0000',
				to: '4b0000',
				isActive: false
			}]
		}

		if(localStorageService.isSupported && localStorageService.length() === 0) {
			this.localStorageService.set("iAchivement", angular.toJson(localStorageDefaultData));
		}
	}

	getClass(path){
		return (this.$location.path().substr(0, path.length) === path) ? 'active' : '';
	}
}