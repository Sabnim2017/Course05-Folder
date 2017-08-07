(function (){
'use strict';

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['MenuService'];
function MyinfoController (MenuService) {
  var myinfoCtrl = this;

  myinfoCtrl.signups = MenuService.getSignupData();

  console.log("myinfoCtrl.signups", myinfoCtrl.signups);

}


})();