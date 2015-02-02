'use strict';

/**
 * @ngdoc function
 * @name MayDayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the MayDayApp
 */
angular.module('MayDayApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
