angular.module('officerDetail').
    component('officerDetail', {
        templateUrl: 'officer-detail/officer-detail.template.html',
        controller: function($routeParams, $location) {
            var ctrl = this;
            this.officerId = $routeParams.officerId;
            this.officer = {
                    officerId: '1234567',
                    firstName: 'Lisa',
                    lastName: "Raty",
                    initials: "",
                    shortName: "LRATY",
                    officerCardNumber: null,
                    lastUpdateDate: 1503338327743,
                    absenceStartDate: null,
                    absenceEndDate: null,
                    pipStartDate: null,
                    pipEndDate: null,
                    emailAddress: null,
                    assignedTransits: [
                        {
                            branch: {
                                transitNum: "71001",
                                name: "MONTREAL CENTRAL ACCOUNTING UNIT"
                            },
                            role: "TRANSACTIONAL",
                            level: "ONE"
                        },
                        {
                            branch: {
                                transitNum: "70722",
                                name: "NORTH BAY - BUSINESS BANKING CENTRE"
                            },
                            role: "MANAGEMENT",
                            level: "TWO"
                        },
                        {
                            branch: {
                                transitNum: "80002",
                                name: "SCOTIA PLAZA"
                            },
                            role: "CUSTOMER_SERVICE",
                            level: "THREE"
                        }
                    ],
                    authorities: []
            };

            this.done = function() {
                var url = $location.path();
                $location.path('/locate');
            }
        }
});
