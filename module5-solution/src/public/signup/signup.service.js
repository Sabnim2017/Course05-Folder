(function() {
'use strict';

angular.module('public')
.service('SignupService', SignupService)
//.constant('ApiPath', 'https://sn-course05.herokuapp.com');

SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;
  console.log("This is fun. SignupService works.");

  var signupFormData = [];
  console.log(signupFormData);

  var errorMessage = false;
  var saveMessage = false;

  service.saveSignupForm = function (user) {

    if (user.favDish) {
      console.log("menuNumber", user.favDish);
      var menuNumber = user.favDish.toUpperCase();
      console.log("menuNumber", menuNumber);
      
      return $http.get(ApiPath + '/menu_items/' + menuNumber + '.json')
                  .then(function (response) { 
                    console.log(response);
                    console.log("The submit button was pressed.");

                    var signupFormItem = user;
                    signupFormData.push(signupFormItem);
                    console.log("signupFormData", signupFormData);
                    saveMessage = true;
                    console.log(saveMessage);
                    return saveMessage; 
                    }, function (error) {
                          console.log("Error: menu number doesn't exist.");
                          errorMessage = true;
                          return errorMessage;
                    });
    }
      
  };

  service.getSignupData = function () {
    return signupFormData;
    console.log(signupFormData);
  };

}

})();