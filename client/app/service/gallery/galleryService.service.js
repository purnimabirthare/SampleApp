'use strict';

/**
 * @ngdoc service
 * @name sampleApp.service : galleryService
 * @description
 * This is a service that performs the functionality of gallery and gets mobile data from json
 * @param {service} $http that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.
 */

angular.module('sampleAppApp')
  .service('galleryService', function ($http) {

     // AngularJS will instantiate a singleton by calling "new" on this function
	this.getProducts = function(){

		// returns promise
		return $http.get('../assets/data/mobileData.json');
	};

  });
