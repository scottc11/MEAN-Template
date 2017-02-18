'use strict';

angular.module('templateApp')

.service('dataService', function($http, $q) {

  // THIS IS WHERE THE SERVICE WILL CONNECT WITH DATA API
  this.getData = function() {
    $http.get('/api/');
  }


});
