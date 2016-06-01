'use strict';

angular.module('sampleAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
       .otherwise('/home');
      $stateProvider
       .state('home', {
            url: '/home',
            templateUrl: 'app/views/main.html',
            controller: 'GalleryCtrl'
                      
        })
       .state('contact', {
            url: '/contact',
            templateUrl: 'app/views/contact.html',
            controller: 'ContactCtrl'
        })
  });


