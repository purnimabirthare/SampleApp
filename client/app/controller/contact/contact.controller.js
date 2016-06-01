'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller : ContactCtrl
 * @description
 * This controller is designed to perform the functionality of Contact
 * @param {service} $scope RootScope object
 * @param {service} $$rootScope RootScope object
 */

(function(angular) {
    'use strict';
    function contactControllerConstructor($scope,$rootScope,$log){
    	var vm = $scope; 
  	    vm.tab = 2;
		vm.user = {
			name:'',
			email: '',
			comment: ''
		};
		vm.submitForm = function(formState){
			if(formState){
				$log.log('Form submitted successfully.');
			}else{
				$log.log('Please fill both name and mailId.');
			}
		}
    }

 angular.module('sampleAppApp')
        .controller('ContactCtrl', contactControllerConstructor);
})(angular);

