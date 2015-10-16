app.factory('items', ['$http', function($http) { 
  return $http.get('http:/localhost:8080/items/') 
    .success(function(data) { 
      alert("get data");
      return data;
    }) 
    .error(function(err) { 
      alert("cannot");
      return err;              
    }); 
}]);