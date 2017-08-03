(function () {
    "use strict";
    
       var hotelModule = angular.module('hotelModule');
        hotelModule.component('hotel', {
            templateUrl: 'public/hotel/hotel.template.html',
            controller: ['$scope','$state', function($scope, $state) {
                $scope.find_hotel = function(){
                	$state.go('hotel_query');
                };

            }]
        });


    hotelModule.filter('byfacility', function () {
        return function (board, genres) {
            var items = {
                genres: genres,
                out: []
            };
            angular.forEach(board, function (value, key) {
                if (this.genres[value.genre] === true) {
                    this.out.push(value);
                }
            }, items);
            return items.out;
        };
    });
        
        hotelModule.component('hotelResult',{
        	templateUrl:'public/hotel/hotel_result.template.html',
        	controller: ['$scope','orderByFilter', function($scope, orderBy){

        	}]
        });
}());