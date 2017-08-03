(function(){
    "use strict";
    var accountPwdF = angular.module("account");


    accountPwdF.component("forgotPwd",{
        controller : function($scope){
            $scope.recoveryEmail= 'Barryogbonna@gmail.com';
        },
        templateUrl  : 'public/account/forgotPwd.template.html'
    });
}());