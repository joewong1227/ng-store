app.factory('items', ['$http', function($http) { 
  return $http.get('https://wsjwong.github.io/ngStore/items.json') 
    .success(function(data) { 
    })
    .error(function(err) {         
    }); 
}]);
