'use strict';

ddescribe('Service: galleryService', function () {

  // load the service's module
  beforeEach(module('sampleAppApp'));

  // instantiate service
  var galleryService;
  beforeEach(inject(function (_galleryService_) {
    galleryService = _galleryService_;
  }));

  it('should do something', function () {
    galleryService.getProducts();
    // expect(!!galleryService).toBe(true);
  });

});
