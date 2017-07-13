import * as angular from 'angular';

export class TrafficService {

  constructor($http, $q){
    this.dfd = $q.defer();
    this.$http = $http;
    this.$q = $q;
    this.data = null;
  }

  static factory() {
    let service = ($http, $q) => {
      return new TrafficService($http, $q);
    }
    service.$inject = ['$http', '$q'];
    return service;
  }

  checkCurrentStatus() {
    const url = 'http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=50';

    return this.$http.get(url)
      .then((response) => {
        this.data = response.data;
        this.dfd.resolve(response.data);
      });
  }

  getData() {
    if(this.data) {
      this.dfd.resolve(this.data);
    } else {
      this.checkCurrentStatus();
    }
    return this.dfd.promise;
  }
}

angular
  .module('services')
  .factory('TrafficService', TrafficService.factory());

