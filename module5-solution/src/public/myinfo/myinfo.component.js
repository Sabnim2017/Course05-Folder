(function () {
"use strict";

angular.module('public')
.component('myinfo', {
  templateUrl: 'src/public/signup/signup.html',
  bindings: {
    signupFormData: '<'
  },
  controller: SignupFormController
});