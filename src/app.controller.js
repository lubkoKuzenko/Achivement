export default class AppController {

	constructor($scope, TrafficService) {
		TrafficService.getData().then((data) => {
			this.items = data.features;
			this.items.map(function(item) {
				return item.available = item.properties.layers['parking.garage'].data.FreeSpaceLong || item.properties.layers['parking.garage'].data.FreeSpaceShort;
			});	
		});
	}
}