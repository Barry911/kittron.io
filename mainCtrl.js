
angular.module('kittron')
    .controller('MainCtrl',['$scope','$state',MainCtrl]);

function MainCtrl($scope,$state) {
		$scope.showMenu = false;
    $scope.menuToggle = function(){
    	$scope.showMenu = !$scope.showMenu;
    	
    	
    };
    $scope.goto = function(s){
    	$scope.showMenu = false;
    	$state.go(s);
    	
    };
}