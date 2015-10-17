app.factory('items', ['$http', function($http) { 
  return $http.get('http://localhost:8080/items.json') 
    .success(function(data) { 
      return data;
    }) 
    .error(function(err) { 
      return err;              
    }); 
}]);