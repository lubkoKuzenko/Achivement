export default class StatsController {
	constructor($scope, $timeout) {
		this.$scope = $scope;
		this.$timeout = $timeout;
	}

	$onInit() {
        this.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.data = [
            [65, 59, 80, 81, 56, 55, 40]
        ];
    }
}