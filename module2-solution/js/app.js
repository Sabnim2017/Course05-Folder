(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListToBuyController', ShoppingListToBuyController)
.controller('ShoppingListBoughtController', ShoppingListBoughtController)
.service('ShoppingListService', ShoppingListService);

ShoppingListToBuyController.$inject = ['ShoppingListService'];
function ShoppingListToBuyController(ShoppingListService) {
	var toBuy = this;

	toBuy.items = ShoppingListService.getItems();

	toBuy.removeItem = function (itemIndex) {
       ShoppingListService.removeItem(itemIndex);
    };

}

ShoppingListBoughtController.$inject = ['ShoppingListService'];
function ShoppingListBoughtController(ShoppingListService) {
	var bought = this;

	bought.itemsBought = ShoppingListService.getItemsBought();

}

function ShoppingListService() {
	var service = this;

	var items = [
	  {name: "Milk", quantity: "1 gallon"},
	  {name: "Eggs", quantity: "1 dozen"},
	  {name: "Cheese", quantity: "1 pound"},
	  {name: "Ham", quantity: "1 pound"},
	  {name: "Bread", quantity: "1 loaf"}
	];

	var itemsBought = [];

	service.getItems = function () {
      return items;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

    service.removeItem = function (itemIndex) {
      itemsBought.push(items[itemIndex]);
      items.splice(itemIndex, 1);
    };

}

})(); 