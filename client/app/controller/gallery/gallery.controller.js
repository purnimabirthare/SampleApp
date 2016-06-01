'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller : GalleryCtrl
 * @description
 * This controller is designed to perform the functionality of Gallery
 * @param {service} $scope RootScope object
 * @param {service} $rootScope RootScope object
 * @param {service} $log Logger Service to log messages
 * @param {service} galleryService is a service that perform the functionality of gallery
 */

(function(angular) {
    'use strict';
    function galleryControllerConstructor($scope,$rootScope,$log,galleryService){
    	var vm = $scope; 
  	    vm.tab = 1;
		vm.heading = 'Summary';
		vm.description = 'This is a sample page to show categories of mobiles. You can also search the device on the basis of any of the attribute.';

		vm.setTab = function(selectedTab){
			vm.tab = selectedTab;
		}


	// service call to get product data.
		galleryService.getProducts().then(function(products){
			vm.products = products.data;
			
		}, function(){
			$log.log('error in fetching data from service.');
		});
    }

 angular.module('sampleAppApp')
        .controller('GalleryCtrl', galleryControllerConstructor);
})(angular);

