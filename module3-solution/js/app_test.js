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
      onRemove: '&'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var menu = this;
  menu.searchTerm ="";
  
  MenuSearchService.getMatchedMenuItems().
  then(function(found) {
    menu.foundItems = found;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  menu.getMatchedMenuItems = function () {
    MenuSearchService.getMatchedMenuItems(menu.searchTerm);
  };

  menu.removeItem = function (itemIndex) {
   MenuSearchService.removeItem(itemIndex);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var found = [];

  service.getMatchedMenuItems = function (searchTerm) {
 
    found = [];

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
      }).then(function (response) {

      var items = response.data.menu_items;
      for (var i=0; i<items.length;i++){
        if (searchTerm != "" && items[i].name.toLowerCase().indexOf(searchTerm) !== -1){
          console.log(items[i].name, items[i].description);
          found.push(items[i]);
        }
      }
      });
      return found;
  }

  service.removeItem = function (itemIndex) {
    found.splice(itemIndex, 1);
  };


}
})();