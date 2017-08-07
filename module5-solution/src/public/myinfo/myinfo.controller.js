(function (){
'use strict';

angular.module('public')
.controller('MyinfoController', MyinfoController);

var signups = [];

MyinfoController.$inject = ['MenuService', 'ApiPath'];
function MyinfoController (MenuService, ApiPath) {
  var myinfoCtrl = this;
  
  myinfoCtrl.signups = MenuService.getSignupData();

  myinfoCtrl.favDish = MenuService.getFavDish();

  myinfoCtrl.signupsSaved = false;

  console.log("myinfoCtrl.signups.length", myinfoCtrl.signups.length);
  if (myinfoCtrl.signups.length == 1) {
  	myinfoCtrl.signupsSaved = true;
  }

  myinfoCtrl.basePath = ApiPath;
  
  if (myinfoCtrl.favDish!= undefined) {
      MenuService.getMenuItem(myinfoCtrl.favDish).then(function(result){
        myinfoCtrl.menuItem =result.data;
      });
  }

}

})();