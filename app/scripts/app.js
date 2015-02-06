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
    'ngTouch',
    'duParallax'
  ])
  .run(function($rootScope, $location, parallaxHelper) {
    $rootScope.navigation =  [
    { page: 'Home', path: '' },
    { page: 'About', path: 'about' },
    { page: 'Technology', path: 'technology' },
    { page: 'Privacy', path: 'privacy' },
    { page: 'Contact', path: 'contact' }];
    $rootScope.backgroundPositoins = '';
    $rootScope.navClass = function (page) {
        page = page.toLowerCase();
        var currentRoute = $location.path().substring(1) || 'home';
        currentRoute = currentRoute.toLowerCase();
        return page === currentRoute ? 'active' : '';
    };
    $rootScope.background = parallaxHelper.createAnimator(-0.3);
    $rootScope.invertColors = function(elementPosition) {
      //console.dir(elementPosition);
      var factor = -0.4;
      var pos = Math.min(Math.max(elementPosition.elemY*factor, 0), 255);
      var bg = 255-pos;
      return {
        backgroundColor: 'rgb(' + bg + ', ' + bg + ', ' + bg + ')',
        color: 'rgb(' + pos + ', ' + pos + ', ' + pos + ')'
      };
    };
    $rootScope.transitionBackground = function(elementPosition) {
      //console.dir(elementPosition);
      var left = elementPosition.elemY * -0.6;
      //console.log(left);
      return {
        backgroundPosition: left + 'px 0px '
      };
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
      .when('/privacy', {
        templateUrl: 'views/privacy.html',
        controller: 'PrivacyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
