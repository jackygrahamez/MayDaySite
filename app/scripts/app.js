'use strict';

/**
 * @ngdoc overview
 * @name MayDayApp
 * @description
 * # MayDayApp
 *
 * Main module of the application.
 */
angular
  .module('MayDayApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function($rootScope, $location) {
    $rootScope.navigation =  [
    { page: 'Home', path: '' },
    { page: 'About', path: 'about' },
    { page: 'Technology', path: 'technology' },
    { page: 'Contact', path: 'contact' }];
    $rootScope.navClass = function (page) {
        page = page.toLowerCase();
        var currentRoute = $location.path().substring(1) || 'home';
        currentRoute = currentRoute.toLowerCase();
        return page === currentRoute ? 'active' : '';
    };
  })
  .filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/technology', {
        templateUrl: 'views/technology.html',
        controller: 'TechnologyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
