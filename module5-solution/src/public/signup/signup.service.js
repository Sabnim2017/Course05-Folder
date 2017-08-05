(function() {
'use strict';

angular.module('public')
.service('SignupService', SignupService);

SignupService.$inject = [];
function SignupService() {
  var service = this;
  console.log("This is fun. SignupService works.");

  var signupFormData = [];
  console.log(signupFormData);

  service.verifyMenuNumber = function (menuNumber) {
    console.log("menuNumber", menuNumber);
  };

  service.saveSignupForm = function (user) {
  	console.log("service.saveSignupForm works");
  	console.log("The submit button was pressed.");

  	var signupFormItem = user;
  	signupFormData.push(signupFormItem);

  	console.log("signupFormData", signupFormData);
  };

}

})();