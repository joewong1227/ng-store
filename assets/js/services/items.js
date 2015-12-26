app.factory('items', ['$http', function($http) { 
  return $http.get('https://wsjwong.github.io/ng-store/items.json') 
    .success(function(data) { 
    })
    .error(function(err) {         
    }); 
}]);
