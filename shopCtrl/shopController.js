angular.module("assessment").controller("shopCtrl", function(shopService, $scope, $stateParams ) {
  console.log('Hello');



  $scope.getProducts = () => {
    console.log('controller')
    shopService.getProducts()
    .then( (response) => {

      $scope.displayProducts = response;
    })
  }


  $scope.getProducts();
});
