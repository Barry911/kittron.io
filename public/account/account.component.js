(function(){
    "use strict";

    var account = angular.module("account");
        account.component("login",{
            controller : [function(){}],
            templateUrl  : 'public/account/login.template.html'
        });
    account.controller('RegisterCtrl', ['$rootScope','$state','$scope','$http','$timeout','$auth', function($rootScope,$state,$scope,$http,$timeout,$auth){

        $scope.switcher = true;
        $scope.isVendor = true;
        $scope.vendorServices = [
            "Audiovisual",
            "Security Companies",
            "Giftware",
            "Interpretation ",
            "Photographer",
            "Musician",
            "Printers",
            "Destination Management Company",
            "Communications Consultant",
            "Stationery Designer",
            "Promotional Products Distributor",
            "Private Caterer",
            "Wine Shop Owner/Sommelier",
            "Florist",
            "Party Rental Supplier"
        ];
        $scope.registerAs=function(r){
       		$scope.switcher = false;
       		if(r == 'event_planner'){
       			$scope.isVendor = false;
       		}
       		else{
       			$scope.isVendor = true;
       		}
       		
        };		
        $scope.userData ={};		
        $scope.customEmail = function(data){
			if(data.first_name == undefined || data.business_name == undefined){
				return '';
			}
			else{
				var b_name = data.business_name;
				b_name = b_name.replace(' ', '_');
				b_name = angular.lowercase(b_name);
			return data.first_name + '.'+ b_name+'@kr.com';

			}
			
		};

        $scope.register = function(){
            console.log($scope.userData);
            $auth.signup($scope.userData)
                .then(function(response) {
                    $state.go('');
                })
                .catch(function(response) {
                    // Handle errors here.
                });
        };

    }])
        .directive('emailValidator', function(){
            return {
                require: 'ngModel',
                link: function(scope , element, attrs, ngModel){
                    ngModel.$validators.email = function (modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        var regex = /^([^<>()\[\],;:@"\x00-\x20\x7F]|\\.)+@(([a-z]|#\d+?)([a-z0-9]|#\d+?)*([a-z0-9]|#\d+?)\.)+([a-z]{2,4})$/i;
                        return regex.test(value);
                    }
                }
            };
        })
        .directive('emailAvailability', function($http,$q){
            return {
                require : 'ngModel',
                link : function (scope, element, attrs, ngModel) {
                    ngModel.$asyncValidators.exist = function(modelValue, viewValue){
                        var value = modelValue || viewValue;

                        return $http.post('http://localhost/api/v1/check', {email: viewValue})
                            .then(function successCallback(response) {
                                return false;
                            }, function errorCallback(response) {
                                return true;
                            });

                    };
                }
            };
        })
        .directive('passwordValidate', function(){
            return {
                require: 'ngModel',
                link: function(scope , element, attrs, ngModel){
                    ngModel.$validators.password = function (modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        if(value !== undefined){
                            var regex = /[A-Z]\d/;
                            return regex.test(value);
                        }

                    }
                }

            };
        })
        .directive('passwordMatch', [function ($scope) {
            return {
                scope:{
                   matchPass: '=pass'
                },
                require: 'ngModel',
                link: function ($scope, elem , attrs,ngModel) {
                        ngModel.$validators.password = function (modelValue, viewValue, scope) {
                            //var value = modelValue;
                           // var value2 =  scope.matchPass.userData;
                            //return angular.equals(value, value2);
                        }

                }
            };
        }])
        .directive('numberValidate', function(){
            return {
                require: 'ngModel',
                link: function(scope , element, attrs, ngModel){
                    ngModel.$validators.telephone = function (modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        var regex = /^(\+\d{1,3} ?)?(\(\d{1,5}\)|\d{1,5}) ?\d{0,7}?$/i;
                        return regex.test(value);
                    }
                }

            };
        })
        .directive('businessAvailability', function(){
            return {
				
            };
        })
        .directive('sAvail', function(){
            return {

            };
        })
		.directive('sVal', function(){
            return {
				require: 'ngModel',
                link: function(scope , element, attrs, ngModel){
                    ngModel.$validators.string = function (modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        //var regex = /^[a-zA-Z]/i;
                        var regex = /^[-\w]+$/i;
                        //var regex = /[^-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;
                        return regex.test(value);
                    }
                }
            };
        });

    account.controller('LoginCtrl', ['$rootScope','$state','$scope','$auth','$location', function($rootScope,$state,$scope,$auth,$location){
        $scope.loginData ={};
        $scope.loginData =
            {
                password : '00409355',
                username : 'barryogbonna@gmail.com'
            };
        $scope.loginUser = function(){
            $scope.processing =true;
            $auth.login($scope.loginData, {
                method: 'POST',
                headers: {'content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function (data, headersGetter) {
                    var str = [];
                    for(var d in data){
                      str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
                    }
                    return str.join("&");
                }

            })
                .then(function (data) {
                    $scope.processing = false;
                    $auth.setToken(data.data.access_token);
                    $location.path('/dashboard');
                    location.reload(true);
                    console.log(data.data);
                    var payload = $auth.getPayload();
                    console.info(payload);
                })
                .catch(function (error) {
                    $scope.processing = false;
                    $scope.errors = true;
                    console.log(error);
                });
        };

    }]);
    account.controller('LogoutCtrl', function($state, $auth) {
        if (!$auth.isAuthenticated()) { return; }
        $auth.logout()
            .then(function() {
                $state.transitionTo('home');
                location.reload(true);

            });
    });


// function ForgotPasswordCtrl(){
//        var fc = this;
//        fc.recoveryemail= 'Barryogbonna@gmail.com';
//    }
//    account.component("forgotPwd",{
//        controller : function(){},
//    });

})();
