/**
 * Created by user on 1/4/2017.
 */
(function(){
    'use strict';
    angular.module('account')
        .config(["$locationProvider", "$stateProvider","$ocLazyLoadProvider","$authProvider",function($locationProvider, $stateProvider,$ocLazyLoadProvider,$authProvider){
            var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
                var deferred = $q.defer();
                if ($auth.isAuthenticated()) {
                    deferred.reject();
                } else {
                    deferred.resolve();
                }
                return deferred.promise;
            }];

            $stateProvider.state('register', {
                abstract: true,
                url: '/register',
                resolve: {
                    $title : function(){
                        return 'Create Your Kittron Account';
                    },
                    skipIfLoggedIn: skipIfLoggedIn
                },
                templateUrl: 'public/account/register.template.html'
            });
            $stateProvider.state('register.basic', {
                url: '/',
                loadFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'public/account/dashboard/_dashboard_files/mail_box/compose/compose.module.js',
                        'public/account/dashboard/_dashboard_files/mail_box/compose/compose.config.js',
                        'public/account/dashboard/_dashboard_files/mail_box/compose/compose.component.js'
                    ]);
                }],
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
            });

        }]);
}());