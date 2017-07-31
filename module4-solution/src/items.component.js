(function (){
'use strict';

angular.module('MenuApp')
.component('itemsList',{
  templateUrl: 'src/templates/itemsList.template.html',
  bindings: {
  	items: '<'
  },
  controller: ItemsComponentController
});

ItemsComponentController.$inject = ['$rootScope'];
function ItemsComponentController($rootScope) {
var $ctrl = this;

var cancellers = [];

  $ctrl.$onInit = function () {
    var cancel = $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      console.log('list of items state change started');
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      console.log("list of items state changed successful");
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log("list of items state transition error: ", error);
    });
    cancellers.push(cancel);
  };

  $ctrl.$onDestroy = function () {
    cancellers.forEach(function (item) {
      item();
    });
  };
}

})();