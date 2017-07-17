export default class StatsController {
	constructor($scope, $timeout) {
		this.$scope = $scope;
		this.$timeout = $timeout;

        this.active = 'year';
	}

	$onInit() {
        this.yearStatistics();
    }

    yearStatistics(){
        this.active = 'year';
        this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.data = [
            [65, 59, 0, 81, 56, 55, 40, 21, 13, 35, 22, 19]
        ];
    }

    monthStatistics(){
        this.active = 'month';
        this.labels = this.getDaysArray(new Date().getFullYear(), new Date().getMonth())
        this.data = [
            [12, 1, 0, 66, 44, 32, 77, 44, 22, 15, 12, 88, 12, 1, 22, 66, 44, 32, 77, 44, 22, 15, 12, 88, 12, 1, 22, 66, 44, 32]
        ];
    }

    allStatistics(){
        this.active = 'all';
        this.labels = ['2015', '2016', '2017']
        this.data = [
            [1,2,3]
        ];
    }

    getDaysArray(year, month) {
        var numDaysInMonth, daysInWeek, daysIndex, index, i, l, daysArray;

        numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        daysIndex = { 'Sun': 0, 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6 };
        index = daysIndex[(new Date(year, month - 1, 1)).toString().split(' ')[0]];
        daysArray = [];

        for (i = 0, l = numDaysInMonth[month - 1]; i < l; i++) {
            daysArray.push((i + 1) + '. ' + daysInWeek[index++]);
            if (index == 7) index = 0;
        }

        return daysArray;
    }
}