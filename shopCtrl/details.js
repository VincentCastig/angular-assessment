angular.module("assessment").controller("detailsCtrl", function(shopService, $scope, $stateParams ) {
  console.log('Hello detailsCtrl');


  $scope.getProductsById = () => {
    console.log('jj')
    shopService.getProducts()
    .then( (response) => {

        for (obj of response){

          if(obj.id === $stateParams.id){
            console.log(obj)
            $scope.displayProductsByID = obj
          }
        }
    })
  }


  $scope.getProductsById();

});
