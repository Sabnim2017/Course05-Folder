(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html'
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.searchTerm ="";

  var promise = MenuSearchService.getMatchedMenuItems();
  promise.then(function(found) {
    menu.items = found;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  menu.getMatchedMenuItems = function () {
    MenuSearchService.getMatchedMenuItems(menu.searchTerm);
  };

  menu.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  var found = [];

  service.getMatchedMenuItems = function (searchTerm) {

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
      }).then(function (response) {

      var foundItems = response.data.menu_items;

      for (var i=0; i<foundItems.length;i++){
        if (foundItems[i].name.toLowerCase().indexOf(searchTerm) !== -1){
          console.log(foundItems[i].name, foundItems[i].description);
          found.push(foundItems[i]);
        } else {
          console.log("It did not match.")
        }
      }
      return found;
    })
  };

}

})();