angular.
module('restProxy').
factory('tcsFactory', ['$http', function($http) {
    var tcsFactory = {};
    // var urlBase = 'http://localhost:8080/tcs/';
    var urlBase = 'http://tcs-service.cfapps.io/tcs/';

    tcsFactory.locateById = function(officerId, transitNum) {
        console.log('locating by ID from ' + urlBase);
        return $http.get(urlBase + 'locate/officerId?officerId=' + officerId + "&transitNum=" + transitNum);
    };

    tcsFactory.locateByName = function(firstName, lastName) {
        console.log('locating by name');
        return $http.get(urlBase + 'locate/name?firstName=' + firstName + "&lastName=" + lastName);
    };

    tcsFactory.getOfficerProfile = function(officerId) {
        console.log('getting profile');
        return $http.get(urlBase + 'profile/' + officerId);
    };

    return tcsFactory;
}]);

