'use strict';

describe('Controller: TechnologyCtrl', function () {

  // load the controller's module
  beforeEach(module('MayDayApp'));

  var TechnologyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TechnologyCtrl = $controller('TechnologyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
