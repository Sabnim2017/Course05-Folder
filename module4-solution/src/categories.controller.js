(function () {
'use strict';

angular.module('data')
.controller('MenuCategorieController', MenuCategorieController);

MenuCategorieController.$inject = ['items'];
function MenuCategorieController(items) {
  var category = this;

  category.items = items;
  
}

})();