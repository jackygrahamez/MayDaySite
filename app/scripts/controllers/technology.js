'use strict';

/**
 * @ngdoc function
 * @name MayDayApp.controller:TechnologyCtrl
 * @description
 * # TechnologyCtrl
 * Controller of the MayDayApp
 */
angular.module('MayDayApp')
  .controller('TechnologyCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
