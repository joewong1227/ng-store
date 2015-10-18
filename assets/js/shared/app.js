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
    .when('/new', {
      controller: 'itemCtrl',
      templateUrl: 'views/category/new.html'
    })
    .when('/top', {
      controller: 'itemCtrl',
      templateUrl: 'views/category/top.html'
    })
    .when('/bottom', {
      controller: 'itemCtrl',
      templateUrl: 'views/category/bottom.html'
    })
    .when('/shoes', {
      controller: 'itemCtrl',
      templateUrl: 'views/category/shoes.html'
    })
    .when('/accessory', {
      controller: 'itemCtrl',
      templateUrl: 'views/category/accessory.html'
    })
    .when('/handmade', {
      controller: 'itemCtrl',
      templateUrl: 'views/category/handmade.html'
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