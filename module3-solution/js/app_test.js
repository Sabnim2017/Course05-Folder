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
  var message ="";

  //  var menu.searchTerm ="";

  var promise = MenuSearchService.getMatchedMenuItems();

  promise.then(function (foundItems) {

    // menu.found = foundItems;
    var find = [];

    for (var i=0; i<foundItems.length;i++){
      if (foundItems[i].name.toLowerCase().indexOf('soup') != -1){
        console.log(foundItems[i].name, foundItems[i].description);
        find.push(foundItems[i]);
      } else {
        console.log("It did not match.")
      }
    }

    menu.found = find;

  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var message = "";

  service.getMatchedMenuItems = function () {

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
      }).then(function (response) {

      var foundItems = response.data.menu_items;

      return foundItems;
    })
  };

}

})();