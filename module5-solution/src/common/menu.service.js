(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  var signups = [];

  service.getCategories = function () {
    return $http.get('https://sn-course05.herokuapp.com/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get('https://sn-course05.herokuapp.com/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.saveSignup = function (signupForm) {
    if (signupForm.$valid) {
      console.log("signupForm.$valid is true");
    //   var user = {
    //     firstName: signupForm.user.firstName,
    //     lastName: signupForm.user.lastName,
    //     email: signupForm.user.email,
    //     phone: signupForm.phone,
    //     favDish: signupForm.favDish
    //   }
    //   signups.push(user);
    // }
    // else {
    //   throw new Error("Your data was not saved.");
    // }
    };
  }; 
}

})();
