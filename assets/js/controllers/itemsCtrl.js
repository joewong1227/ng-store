app.controller("itemsCtrl", function($scope, items) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  items.success(function(data){
    $scope.slides = data;
  })
});