app.controller ('cartCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
    ngCart.setShipping(20);    
}]);