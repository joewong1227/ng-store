var app = angular.module("store", ['ngRoute','ngAnimate']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      //controller: "HomeController",
      templateUrl: "views/home.html"
    })
    .when('/item', {
      controller: 'itemCtrl',
      templateUrl: 'views/item.html'
    })
    .when('/details/:id', {
      controller: 'detailsCtrl',
      templateUrl: 'views/details.html'
    })
    .when('/cart', {
      //controller: 'PhotoController',
      templateUrl: 'views/cart.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});