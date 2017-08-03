(function(){
    "use strict";

    var account = angular.module("dashboard");

    account.controller('DashboardCtrl', ['$mdSidenav','$http', function($mdSidenav,$http){
        var dc = this;
        dc.toggleRight = function(){
                $mdSidenav('right').toggle();
            };
        dc.toggleLeft = function(){
                $mdSidenav('left').toggle();
        };

        $http.get('http://kittron.com/api/public/api').then(
            function(response) {
                console.log(response);
                dc.data = response;
            });

    }]);


})();
