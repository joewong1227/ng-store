app.controller('detailsCtrl', function($scope, items, $routeParams) {
  items.success(function(data) {
    $scope.details = data[$routeParams.id];
  });
});