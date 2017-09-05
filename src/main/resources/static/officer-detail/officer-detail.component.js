angular.module('officerDetail').
    component('officerDetail', {
        templateUrl: 'officer-detail/officer-detail.template.html',
        controller: ['$scope', '$routeParams', '$location', 'tcsFactory', function($scope, $routeParams, $location, tcsFactory) {
            $scope.status = '';
            $scope.officer;
            $scope.success = false;
            $scope.error = false;
        
            $scope.callService = function(anID) {
                tcsFactory.getOfficerProfile(anID)
                .then(function successCallback(response){
                    $scope.officer = response.data;
                    $scope.success = true;
                }, function errorCallback(error){
                    $scope.status = "Unable to locate the officer. " + error.message;
                    $scope.error = true;
                    console.log("Unable to perform get request");
                });            	
            };

            $scope.done = function() {
                var url = $location.path();
                $location.path('/locate');
            };
            
            $scope.callService($routeParams.officerId);
        }]
});
