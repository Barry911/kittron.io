(function () {
    "use strict";
    var dashboard_home = angular.module("dashboardHome");

    dashboard_home.component("dashboardHome",{
                templateUrl: 'public/account/dashboard/_dashboard_files/dashboard/dashboard_home.template.html',
                controller:  function dashbordHomeCtrl(){
                    // this.options = {
                    //     chart: {
                    //         type: 'pieChart',
                    //         height: 400,
                    //         x: function(d){return d.key;},
                    //         y: function(d){return d.y;},
                    //         showLabels: true,
                    //         duration: 500,
                    //         labelThreshold: 0.01,
                    //         labelSunbeamLayout: true,
                    //         legend: {
                    //             margin: {
                    //                 top: 5,
                    //                 right: 35,
                    //                 bottom: 5,
                    //                 left: 0
                    //             }
                    //         }
                    //     }
                    // };
                    // this.data = [
                    //     {
                    //         key: "One",
                    //         y: 5
                    //     },
                    //     {
                    //         key: "Two",
                    //         y: 2
                    //     },
                    //     {
                    //         key: "Three",
                    //         y: 9
                    //     },
                    //     {
                    //         key: "Four",
                    //         y: 7
                    //     },
                    //     {
                    //         key: "Five",
                    //         y: 4
                    //     },
                    //     {
                    //         key: "Six",
                    //         y: 3
                    //     },
                    //     {
                    //         key: "Seven",
                    //         y: .5
                    //     }
                    // ];
                    //
                    // this.user = {
                    //     chart: {
                    //         type: 'pieChart',
                    //         height: 400,
                    //         donut: true,
                    //         x: function(d){return d.key;},
                    //         y: function(d){return d.y;},
                    //         showLabels: true,
                    //
                    //         pie: {
                    //             startAngle: function(d) { return d.startAngle/1 -Math.PI/1 },
                    //             endAngle: function(d) { return d.endAngle/1 -Math.PI/1 }
                    //         },
                    //         duration: 500,
                    //         legend: {
                    //             margin: {
                    //                 top: 5,
                    //                 right: -10,
                    //                 bottom: 5,
                    //                 left: 0
                    //             }
                    //         }
                    //     }
                    // };
                    //
                    // this.userData = [
                    //     {
                    //         key: "One",
                    //         y: 5
                    //     },
                    //     {
                    //         key: "Two",
                    //         y: 2
                    //     },
                    //     {
                    //         key: "Three",
                    //         y: 9
                    //     },
                    //     {
                    //         key: "Four",
                    //         y: 7
                    //     },
                    //     {
                    //         key: "Five",
                    //         y: 4
                    //     },
                    //     {
                    //         key: "Six",
                    //         y: 3
                    //     },
                    //     {
                    //         key: "Seven",
                    //         y: .5
                    //     }
                    // ];

            }
        });

    dashboard_home.component('eventCal',{
                templateUrl : 'public/account/dashboard/_dashboard_files/dashboard/cal.html',
                controller:  function ($scope){

            }
        });

})();