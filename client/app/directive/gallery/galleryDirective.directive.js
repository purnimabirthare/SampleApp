'use strict';
 
 /**
   * @ngdoc function
   * @name sampleApp.directive : galleryDirective
   * This is the sample gallery directive
   * @function galleryDirective
   * @name galleryDirective
   */


angular.module('sampleAppApp')
  .directive('galleryDirective', function () {
    return {
      templateUrl: 'app/views/productList.html',
      restrict: 'E',
      scope:{
      		products:'='
      },
      link: function (scope, element, attrs) {
        
      }
    };
  });

