(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.lunchItems = "";
	$scope.message = "";
	$scope.messageColor = {};

  $scope.calculateMessage = function () {
  	var items =  $scope.lunchItems.split(",");
  	var itemsClean = items.filter(Boolean);
  	var itemsCounter = itemsClean.length;

  	if (items == ""){
  		$scope.message = "Please enter data first.";
  		$scope.messageColor = {
  			"color" : "red",
  			"border" : "1px solid green",
  			"padding" : "5px",
  		}
 	} else if (itemsCounter < 4) {
  		$scope.message = "Enjoy!";
  		$scope.messageColor = {
  			"color" : "green",
  			"border" : "1px solid red",
  			"padding" : "5px"
  		}
 	} else 
 		$scope.message = "Too much!";
 		$scope.messageGreen = {
  			"color" : "green",
  			"border" : "1px solid red",
  			"padding" : "5px"
  		}
  	}

  	return $scope.message;
  };

})();