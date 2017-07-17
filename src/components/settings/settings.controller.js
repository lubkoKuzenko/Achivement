export default class SettingsController {
	constructor($scope, $timeout, UpdateLocalStorageService) {
		this.$scope = $scope;
		this.$timeout = $timeout;
		this.UpdateLocalStorageService = UpdateLocalStorageService;

		this.caterories = this.UpdateLocalStorageService.getCategories();
		this.glyphicons = ['glyphicon-heart', 'glyphicon-star', 'glyphicon-cloud', 'glyphicon-film', 'glyphicon-file', 'glyphicon-bookmark'];
		this.colorSettings = this.UpdateLocalStorageService.getColorSettings();
	}	

	onRemoveClick(name){
		this.caterories = this.UpdateLocalStorageService.removeCategory(name);
	}

	onChangeColorSettings(color){
		this.colorSettings = this.UpdateLocalStorageService.saveColorSettings(color);
	}

	onSubmit(){
		this.category = {
			'name': this.category.name,
			'icon': this.glyphicons[Math.floor(Math.random() * this.glyphicons.length)]
		}
		this.caterories = this.UpdateLocalStorageService.addCategory(this.category);
		this.category = {}
	}
}