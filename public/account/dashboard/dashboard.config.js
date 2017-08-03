/**
 * Created by user on 1/5/2017.
 */
(function(){
    "use strict";
    angular.module('dashboard')
        .config(["$locationProvider", "$stateProvider","$ocLazyLoadProvider",function($locationProvider, $stateProvider,$ocLazyLoadProvider){
            $ocLazyLoadProvider.config({
                modules: [{
                    name: 'dashboardFiles',
                    files: [
                        'public/account/dashboard/_dashboard_files/dashboard/dashboard_home.module.js',
                        'public/account/dashboard/_dashboard_files/manage_contacts/manage_contacts.module.js',
                        'node_modules/angular-material-data-table/dist/md-data-table.min.css',
                        'node_modules/angular-material-data-table/dist/md-data-table.min.js',
                        'node_modules/angular-avatar-master/dist/angular-avatar.js',
                        'js/ngletteravatar.js',
                        // 'public/account/dashboard/_dashboard_files/dashboard/calendar.controller.js',
                        // 'public/account/dashboard/_dashboard_files/manage_contacts/manage_contacts.component.js',
                        'node_modules/angular-material-event-calendar/dist/angular-material-event-calendar.css'
                    ]
                }]
            });

            $stateProvider.state('dashboard', {
                url: '/dashboard',
                abstract: true,
                resolve: {
                    $title: function () {
                        return 'Dashboard';
                    },
                    loadMyFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'public/account/dashboard/js/excanvas.min.js',
                            'public/account/dashboard/js/full-calendar/fullcalendar.min.js'
                        ]);
                    }]
                },
                templateUrl: 'public/account/dashboard/dashboard.template.html'

            });
            $stateProvider.state('dashboard.home',{
                url : '',
                resolve : {
                    $title: function(){
                        return 'Dashboard Home';
                    },
                    // loadMyHomeFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                    //     return $ocLazyLoad.load([
                    //         'node_modules/angular-material-data-table/dist/md-data-table.min.css',
                    //         'node_modules/angular-material-data-table/dist/md-data-table.min.js',
                    //         'public/account/dashboard/_dashboard_files/dashboard/dashboard_home.module.js',
                    //         'public/account/dashboard/_dashboard_files/dashboard/dashboard_home.config.js',
                    //         'public/account/dashboard/_dashboard_files/dashboard/calendar.controller.js',
                    //         'public/account/dashboard/_dashboard_files/dashboard/calendar.css',
                    //         'public/account/dashboard/_dashboard_files/dashboard/dashboard_home.component.js',
                    //         'node_modules/d3/d3.js',
                    //         'node_modules/nvd3/build/nv.d3.js',
                    //         'node_modules/nvd3/build/nv.d3.css',
                    //         'node_modules/angular-nvd3/dist/angular-nvd3.js',
                    //         'public/account/dashboard/_dashboard_files/components/budget_table.component.js',
                    //         'node_modules/angular-material-event-calendar/dist/angular-material-event-calendar.css'
                    //     ]);
                    // }],
                    loadMyHomeFiles: [
                        '$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'dashboard',
                                files: [
                                    'node_modules/angular-material-data-table/dist/md-data-table.min.css',
                                    'node_modules/angular-material-data-table/dist/md-data-table.min.js',
                                    'public/account/dashboard/_dashboard_files/dashboard/dashboard_home.module.js',
                                    'public/account/dashboard/_dashboard_files/dashboard/dashboard_home.config.js',
                                    'public/account/dashboard/_dashboard_files/dashboard/calendar.controller.js',
                                    'public/account/dashboard/_dashboard_files/dashboard/calendar.css',
                                    'public/account/dashboard/_dashboard_files/dashboard/dashboard_home.component.js',
                                    'node_modules/d3/d3.js',
                                    'node_modules/nvd3/build/nv.d3.js',
                                    'node_modules/nvd3/build/nv.d3.css',
                                    'node_modules/angular-nvd3/dist/angular-nvd3.js',
                                    'public/account/dashboard/_dashboard_files/components/budget_table.component.js',
                                    'node_modules/angular-material-event-calendar/dist/angular-material-event-calendar.css'
                                ]
                            });
                        }
                    ]
                },

                template : '<dashboard-home></dashboard-home>'
            });
            $stateProvider.state('dashboard.reports',{
                url : '/reports',
                resolve : {
                    $title: function(){
                        return 'Reports';
                    }

                },
                template : '<h1>Yeh</h1>'
            });
            $stateProvider.state('dashboard.app_tour',{
                url : '/app_tour',
                resolve : {
                    $title: function(){
                        return 'App tour';
                    }
                },
                template : '<app-tour></app-tour>'
            });
            $stateProvider.state('dashboard.mail_box',{
                url : '/mail',
                resolve : {
                    $title: function(){
                        return 'Mailbox ';
                    },
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('dashboardFiles');
                    }],
                    loadMyFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'public/account/dashboard/_dashboard_files/mail_box/mail_box.module.js',
                            'public/account/dashboard/_dashboard_files/mail_box/mail_box.config.js',
                            'public/account/dashboard/_dashboard_files/mail_box/mail_box.component.js'
                        ]);
                    }]
                },
                template : '<mail-box></mail-box>'
            });
            $stateProvider.state('dashboard.mail_box.inbox',{
                url : '/inbox',
                resolve : {
                    $title : function(){
                        return ' Inbox ';
                    }
                },
                template : '<inbox></inbox>'
            });
            $stateProvider.state('dashboard.manage_events',{
                url : '/manage_events',
                resolve : {
                    $title: function(){
                        return 'Manage events';
                    }
                },
                template : '<h1>Yeh</h1>'
            });
            $stateProvider.state('dashboard.contacts',{
                url : '/contacts',
                resolve : {
                    $title: function(){
                        return 'Manage contacts';
                    },
                    loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('dashboardFiles');
                    }],
                    loadMyFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            // 'public/account/dashboard/_dashboard_files/manage_contacts/manage_contacts.module.js',
                            'public/account/dashboard/_dashboard_files/dashboard/calendar.controller.js',
                            'public/account/dashboard/_dashboard_files/manage_contacts/manage_contacts.component.js',
                            'node_modules/angular-material-event-calendar/dist/angular-material-event-calendar.css'
                        ]);
                    }],
                },

                template : '<dashboard-contacts></dashboard-contacts>'
            });
            $stateProvider.state('dashboard.manage_site',{
                url : '/manage_site',
                resolve : {
                    $title: function(){
                        return 'Manage site';
                    },
                    loadMyFiles: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'public/account/dashboard/_dashboard_files/manage_site/manage_site.module.js',
                            'public/account/dashboard/_dashboard_files/manage_site/manage_site.component.js'                        ]);
                    }]
                },
                template : '<manage-site></manage-site>'
            });
        }]);
}());