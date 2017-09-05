angular.
module('locateOfficer').
component('locateOfficer', {
    templateUrl: 'locate-officer/locate-officer.template.html',
    controller: ['$scope', 'tcsFactory', function($scope, tcsFactory) {
        $scope.officerId = '';
        $scope.transit = '80002';
        $scope.criteria = "id";
        $scope.officerSelected = false;
        $scope.status = '';
        $scope.officers;
        $scope.success = false;
        $scope.error = false;

        $scope.locate = function() {
            if ($scope.criteria == 'id') {
                tcsFactory.locateById($scope.officerId, $scope.transit)
                    .then(function successCallback(response){
                        $scope.officers = response.data;
                        $scope.success = true;
                    }, function errorCallback(error){
                        $scope.status = "Unable to locate the officer. " + error.message;
                        $scope.error = true;
                        console.log("Unable to perform get request");
                    });
            }
            else if ($scope.criteria == 'name') {
                tcsFactory.locateByName($scope.firstName, $scope.lastName)
                    .then(function successCallback(response){
                        $scope.officers = response.data;
                        $scope.success = true;
                    }, function errorCallback(error){
                        $scope.status = "Unable to locate the officer. " + error.message;
                        $scope.error = true;
                        console.log("Unable to perform get request");
                    });
            }
            else {

            }
        };
        $scope.reset = function () {
            $scope.officers = [];
            $scope.officerId = '';
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.officerSelected = false;
        };

        $scope.validInput = function () {
            return (
                $scope.criteria == 'id' && $scope.officerId.length == 7 && !isNaN($scope.officerId)
                ||
                $scope.criteria == 'name' && $scope.firstName.length > 0 && $scope.lastName.length > 0
            );
        };

    }],
});
