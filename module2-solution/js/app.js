(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuy = this;

	toBuy.items = ShoppingListCheckOffService.getItems();

	toBuy.removeItem = function (itemIndex) {
       ShoppingListCheckOffService.removeItem(itemIndex);
    };

    toBuy.itemName = "";
    toBuy.itemQuantity = "";

    toBuy.addItem = function () {
      ShoppingListCheckOffService.addItem(toBuy.itemName, toBuy.itemQuantity);
    }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var bought = this;

	bought.itemsBought = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService() {
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

    service.addItem = function (itemName, itemQuantity) {
      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      items.push(item);
      console.log(item.name)
    };
}
})(); 