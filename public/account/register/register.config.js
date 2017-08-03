(function(){
    "use strict";
    angular.module('register')
        .config(["$locationProvider", "$stateProvider","$ocLazyLoadProvider",function($locationProvider, $stateProvider,$ocLazyLoadProvider){
            $stateProvider.state('register', {
                abstract: true,
                url: '/register',
                resolve: {
                    $title : function(){
                        return 'Create Your Kittron Account';
                    }
                },
                loadMyFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'core/account/userAccount.js',
                        'public/account/dashboard/_dashboard_files/mail_box/compose/compose.module.js',
                        'public/account/dashboard/_dashboard_files/mail_box/compose/compose.config.js'
                    ]);
                }],
                templateUrl: 'public/account/register.template.html'
            });
            $stateProvider.state('register.basic', {
                url: '/',
                templateUrl: 'public/account/register/basic.template.html'
            });
            $stateProvider.state('register.business', {
                url: '/',
                templateUrl: 'public/account/register/business.template.html'
            });
            $stateProvider.state('register.website', {
                url: '/',
                templateUrl: 'public/account/register/website.template.html'
            });
            $stateProvider.state('register.confirm', {
                url: '/',
                templateUrl: 'public/account/register/confirm.template.html'
            });$stateProvider.state('register.success', {
                url: '/verify',
                templateUrl: 'public/account/register/confirm.template.html'
            });
        }]);

}());