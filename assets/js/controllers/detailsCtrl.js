app.controller('detailsCtrl', function($scope, items, $routeParams) {
  
  $scope.doBack = function() {
  window.history.back();
  };

  items.success(function(data) {
    $scope.details = data[$routeParams.id];
  });
});