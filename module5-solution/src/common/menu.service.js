(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService)
.constant('ApiPath', 'https://sn-course05.herokuapp.com');


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  var signups = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  var message = [];
  var menuNumber = "";
  service.saveSignupForm = function (signupInfo) {

    menuNumber = signupInfo.favDish.toUpperCase(); 

    if (menuNumber) {
      console.log("menuNumber", menuNumber);
      
      return $http.get(ApiPath + '/menu_items/' + menuNumber + '.json')
                  .then(function (response) { 
                    console.log(response.data);

                    var signup = { 
                        fname: signupInfo.firstName,
                        lname: signupInfo.lastName,
                      email:  signupInfo.email,
                      phone:  signupInfo.phone,
                      favDish: signupInfo.favDish,
                      menuName: response.data.name,
                      description: response.data.description
                    }
                    signups.push(signup);
                    console.log("signups = ", signups);
                    console.log("signups.length", signups.length);
                    message.push("saved");
                    

                    }, function (error) {
                        console.log("Error: menu number doesn't exists.");
                        message.push("No such menu number exists.",false);
                        console.log("message.length", message.length);
                    });
    }

  };
  
  service.getSignupData = function () {
    console.log("signups",signups);
    console.log("signups.length",signups.length);
    return signups;
  };

  service.getMessage = function () {
    console.log("message.", message);
    return message;
  };
  
  service.getFavDish = function () {
    return menuNumber;
  };

  service.getMenuItem = function (short_name) {
    return $http.get(ApiPath + '/menu_items/'+ short_name +'.json').then(function (response) {
      return response;
      console.log(response.data);
    });
  };

}

})();
