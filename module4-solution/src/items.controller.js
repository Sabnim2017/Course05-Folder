(function () {
'use strict';

angular.module('data')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['items'];
function MenuItemsController(items) {
  var menuItems = this;

  menuItems.items = items.menu_items;
  menuItems.name = items.name;
  console.log(menuItems);
  
}

})();