'use strict';

/**
 * @ngdoc function
 * @name MayDayApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the MayDayApp
 */
angular.module('MayDayApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
