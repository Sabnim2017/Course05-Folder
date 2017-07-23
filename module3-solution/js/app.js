(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var search = this;

  var promise = MenuSearchService.getMatchedMenuItems();

  promise.then(function (response) {
    search.items = response.data;
  })
  .catch(function (error) {
    console.log("Something went wrong here.");
  });

};

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService ($http, ApiBasePath){
  var service = this;

  var message = "";
  var found = [];

  service.getMatchedMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    }
    return response;
  });

}

}();