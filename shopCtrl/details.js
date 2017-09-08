angular.module("assessment").controller("detailsCtrl", function(shopService, $scope, $stateParams ) {
  console.log('Hello');


  $scope.getProductsById = () => {
    console.log('jj')
    shopService.getProducts()
    .then( (response) => {
        for (obj of response){
          if(obj.id = $stateParams.id){
            $scope.displayProductsByID = obj
          }
        }
    }
  }


  $scope.getProductsById();

});
