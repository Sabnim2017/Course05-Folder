(function () {
'use strict';

angular.module('public')
.controller('SignupFormController', SignupFormController);

SignupFormController.$inject = [];
function SignupFormController () {
	var signup = this;

	console.log("this form SignupFormController", signup)
}

})();