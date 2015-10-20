app.controller("itemsCtrl", function($scope, items) {
  items.success(function(data){
    $scope.items = data;
  })
});