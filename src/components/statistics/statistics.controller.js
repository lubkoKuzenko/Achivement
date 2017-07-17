export default class StatsController {
	constructor($scope, $timeout) {
		this.$scope = $scope;
		this.$timeout = $timeout;
	}

	$onInit() {
        this.yearStatistics();
    }

    yearStatistics(){
        this.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.data = [
            [65, 59, 80, 81, 56, 55, 40]
        ];
    }

    monthStatistics(){
        this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.data = [
            [12, 1, 22, 66, 44, 32, 77, 44, 22, 15, 12, 88]
        ];
    }
}