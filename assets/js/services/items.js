app.factory('items', ['$http', function($http) { 
  return $http.get('http://localhost:8888/items.json') 
    .success(function(data) { 
    })
    .error(function(err) {         
    }); 
}]);