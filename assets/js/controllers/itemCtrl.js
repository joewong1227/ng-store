app.controller("itemCtrl", function($scope, items) {
  items.success(function(data){
    $scope.items = data;
  })
});