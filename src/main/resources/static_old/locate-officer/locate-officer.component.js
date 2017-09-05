angular.
module('locateOfficer').
component('locateOfficer', {
    templateUrl: 'locate-officer/locate-officer.template.html',
    controller: function LocateOfficerController($scope, $element, $attrs) {
        var ctrl = this;

        this.officerId = '';
        this.transit = '80002';
        this.criteria = "id";
        this.officerSelected = false;

        this.locate = function() {
            if (this.criteria == 'id') {
                // locate by officer id
                this.officers = [
                    {
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
                        branch: {
                            transitNum: "80002",
                            name: "SCOTIA PLAZA"
                        },
                        role: "CUSTOMER_SERVICE",
                        level: "THREE",
                        authorities: []
                    },
                ];
            }
            if (this.criteria == 'name') {
                // locate by name
                this.officers = [
                    {
                        officerId: '1717308',
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
                        branch: {
                            transitNum: "71001",
                            name: "MONTREAL CENTRAL ACCOUNTING UNIT"
                        },
                        role: "TRANSACTIONAL",
                        level: "ONE",
                        authorities: []
                    },
                    {
                        officerId: '1717774',
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
                        branch: {
                            transitNum: "70722",
                            name: "NORTH BAY - BUSINESS BANKING CENTRE"
                        },
                        role: "MANAGEMENT",
                        level: "TWO",
                        authorities: []
                    }
                ];
            }
            else {

            }
        };

        ctrl.select = function(officerId, transitNum) {
            this.selectedOfficerId = officerId;
            this.selectedTransitNum = transitNum;
            this.officerSelected = true;
        };

        ctrl.unSelect = function() {
            this.selectedOfficerId = '';
            this.selectedTransitNum = '';
            this.officerSelected = false;
        };

        ctrl.reset = function() {
            this.officers = [];
            this.officerId = '';
            this.firstName = '';
            this.lastName = '';
            this.officerSelected = false;
        };

        ctrl.validInput = function() {
            return (
                this.criteria=='id' && this.officerId.length==7 && !isNaN(this.officerId)
                ||
                this.criteria=='name' && this.firstName.length>0 && this.lastName.length>0
            );
        }

        ctrl.view = function(officerId){
            $location.href = '#!/officer/' + officerId;
        };
    }
});
