'use strict';

describe('Controller: ContactCtrl', function () {

  // loading the controller's module
  beforeEach(module('sampleAppApp'));

  var ContactCtrl, scope, formState;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactCtrl = $controller('ContactCtrl', {
      $scope: scope
    });
  }));

 // Creating one spec to test one sample scenario
  it('should submit the form successfully', function () {
    formState = true;
    scope.submitForm(formState);
    expect(formState).tobe(true);
  });

});
