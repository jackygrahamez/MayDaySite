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
      var left = elementPosition.elemY * -0.6,
      right = left * -1,
      positions = left + 'px '+left+'px, ' +
      parseInt(right + 2) + 'px '+parseInt(right + 2)+'px, ' +
      parseInt(left + 3) + 'px '+parseInt(right + 3)+'px, ' +
      parseInt(right + 4) + 'px '+parseInt(right + 4)+'px, ' +
      '0px '+left+'px, '+
      '0px '+parseInt(right + 3)+'px, '+
      '0px '+parseInt(right + 2)+'px, '+
      '0px '+parseInt(right + 4)+'px';
      //console.log('positions '+positions);
      return {
        backgroundPosition: positions
      };
    };
    $rootScope.grow = function(a) {
        return a.elemY < 300 && a.elemY > 50 ? {
            msTransform: "scale(1.2)",
            webkitTransform: "scale(1.2)",
            MozTransform: "scale(1.2)",
            OTransform: "scale(1.2)",
            transform: "scale(1.2)"
        } : {
            msTransform: "scale(1)",
            webkitTransform: "scale(1)",
            MozTransform: "scale(1)",
            OTransform: "scale(1)",
            transform: "scale(1)"
        }
    }
    /*
    a.grow = function(a) {
        return a.elemY < 300 && a.elemY > 50 ? {
            msTransform: "scale(1.2)",
            webkitTransform: "scale(1.2)",
            MozTransform: "scale(1.2)",
            OTransform: "scale(1.2)",
            transform: "scale(1.2)"
        } : {
            msTransform: "scale(1)",
            webkitTransform: "scale(1)",
            MozTransform: "scale(1)",
            OTransform: "scale(1)",
            transform: "scale(1)"
        }
    }
    }, a.transitionBackground = function(a) {
        var b = a.elemY * -.6,
            c = -1 * b,
            d = b + 'px 0px, ' + parseInt(c + 2) + 'px 100px, ' + parseInt(b + 3) + 'px 165px, ' + parseInt(c + 4) + 'px 190px';
        return {
            backgroundPosition: d
        }
    }
    */
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
