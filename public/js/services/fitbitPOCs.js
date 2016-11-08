//Interacts with Node API get data.
angular.module('fitbitPOCService', [])
  // super simple service
  // each function returns a promise object 
  .factory('fitbitPOCs', function($http) {
    return {
      get : function() {
        return $http.get('/api/fitbitPOC/test');
      }
    }
});