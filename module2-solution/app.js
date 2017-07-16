(function (){
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListToBuyController', ShoppingListToBuyController)
.controller('ShoppingListBoughtController', ShoppingListBoughtController)
.service('ShoppingListService', ShoppingListService);

ShoppingListToBuyController.$inject = ['ShoppingListService'];

function ShoppingListToBuyController(ShoppingListService) {
	var toBuy = this;

	list.items = {
		name: "Milk", quantity: "1 gallon",
		name: "Eggs", quantity: 12,
		name: "Cheese", quantity: 1,
		name: "Ham", quantity: "1 pound",
		name: "Bread", quantity: "1 loaf"
	}
}

ShoppingListToBuyController.$inject = ['ShoppingListService'];

function ShoppingListService() {

}



})();