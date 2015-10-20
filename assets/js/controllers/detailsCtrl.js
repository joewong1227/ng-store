app.controller('detailsCtrl', function($scope, items, $routeParams) {
  
  //Back button
  $scope.doBack = function() {
  window.history.back();
  };

  items.success(function(data) {
    $scope.details = data[$routeParams.id];
  });
});