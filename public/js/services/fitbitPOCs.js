// Interacts with Node API get data.
// super simple service
// each function returns a promise object 
angular.module('fitbitPOCService', []).factory('fitbitPOCs', function($http) {
  return {
    get : function() {
      return $http.get('/api/fitbitPOC/test');
    }
  }
});