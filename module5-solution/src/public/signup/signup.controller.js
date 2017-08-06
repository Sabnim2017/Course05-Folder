(function () {
'use strict';

angular.module('public')
.controller('SignupFormController', SignupFormController);

SignupFormController.$inject = ['SignupService'];
function SignupFormController (SignupService) {
  var signup = this;

  signup.user = {};
  signup.user.firstName ="";
  signup.user.lastName = "";
  signup.user.email="";
  signup.user.phone ="";
  signup.user.favDish = "";

  console.log("this is form SignupFormController", signup);

  signup.saveSignupForm = function () {
    SignupService.saveSignupForm(signup.user);
  };

  signup.userdata = SignupService.getSignupData();

}

})();