app.factory('items', ['$http', function($http) { 
  return $http.get('http://wsjwong.github.io/ngStore/items.json') 
    .success(function(data) { 
    })
    .error(function(err) {         
    }); 
}]);