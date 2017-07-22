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

};

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService ($http, ApiBasePath){
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: searchTerm
      }
    });
    return response;
  };

}

}();