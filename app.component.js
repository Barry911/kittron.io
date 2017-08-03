(function () {
    "use strict";
    angular.module("kittron")
        .controller('IndexCtrl',['$scope', '$auth',function ($scope,$auth) {
            $scope.search = function () {
                alert('ysy');
            };
            $scope.isAuthenticated = $auth.isAuthenticated();
            $scope.logout = function() {
                alert('logout');
            }

        }])
})();