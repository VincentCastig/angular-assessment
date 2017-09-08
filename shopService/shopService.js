angular.module("assessment").service("shopService", function($http) {

  this.getProducts = () => {
    return $http({
      method: "GET",
      url: "https://practiceapi.devmountain.com/products"
    })
    .then((response) => {
      return response.data
    })
  }
  

});
