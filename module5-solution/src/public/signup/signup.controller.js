(function () {
'use strict';

angular.module('public')
.controller('SignupFormController', SignupFormController);

SignupFormController.$inject = ['MenuService'];
function SignupFormController (MenuService) {
  var signupCtrl = this;

  signupCtrl.firstName = "";
  signupCtrl.lastName = "";
  signupCtrl.email = "";
  signupCtrl.phone = "";
  signupCtrl.favDish = "";
  signupCtrl.message = "" ;

  console.log("signupCtrl", signupCtrl);
  
  signupCtrl.saveSignupForm = function () {
    MenuService.saveSignupForm(signupCtrl);
  };

  signupCtrl.message = MenuService.getMessage();
  console.log("signupCtrl.message",signupCtrl.message);

}

})();