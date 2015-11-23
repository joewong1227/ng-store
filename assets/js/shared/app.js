var app = angular.module("store", ['ngRoute','ngAnimate', 'ui.bootstrap', 'ngTouch']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      //controller: "HomeController",
      templateUrl: "views/home.html"
    })
    .when('/item', {
      controller: 'itemsCtrl',
      templateUrl: 'views/item.html'
    })
    .when('/new', {
      controller: 'itemsCtrl',
      templateUrl: 'views/category/new.html'
    })
    .when('/top', {
      controller: 'itemsCtrl',
      templateUrl: 'views/category/top.html'
    })
    .when('/bottom', {
      controller: 'itemsCtrl',
      templateUrl: 'views/category/bottom.html'
    })
    .when('/shoes', {
      controller: 'itemsCtrl',
      templateUrl: 'views/category/shoes.html'
    })
    .when('/accessory', {
      controller: 'itemsCtrl',
      templateUrl: 'views/category/accessory.html'
    })
    .when('/handmade', {
      controller: 'itemsCtrl',
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