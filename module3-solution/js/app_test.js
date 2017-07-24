(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&',
      errorMessage: '<'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true,
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var menu = this;
  menu.searchTerm ="";
  menu.found = [];
  menu.errorMessage = false;
  
  menu.getMatchedMenuItems = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    promise.then( function(response) {
      if (response.length !== 0) {
        menu.errorMessage = false;
        menu.found = response;
      } else {
        menu.errorMessage = true;
      }
    })
    .catch(function (error) {
      console.log("Something went wrong " + error)
    })
  };

  menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex,1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath', '$filter'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
 
    found = [];

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    
    }).then(function (result) {

      var items = result.data.menu_items;
      var foundItems = [];
      for (var i=0; i<items.length;i++){
        if (searchTerm != "" && items[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
          console.log(items[i].name, items[i].description);
          foundItems.push(items[i]);
        }
      }
      });
      return foundItems;
  }
}

})();