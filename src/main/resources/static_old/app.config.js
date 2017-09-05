angular.
    module('tcsApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider){
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/locate', {
                    template: '<locate-officer></locate-officer>'
                }).
                when('/officer/:officerId', {
                    template: '<officer-detail></officer-detail>'
                }).
                otherwise('/locate');
        }
    ]);