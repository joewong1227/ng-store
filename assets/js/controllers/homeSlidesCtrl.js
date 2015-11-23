app.controller('homeSlidesCtrl', function($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.slides = [
    {
      "img" : "img/items/0.jpg"
    },
    {
      "img" : "img/items/1.jpg"
    },
    {
      "img" : "img/items/2.jpg"
    },
    {
      "img" : "img/items/3.jpg"
    }
  ];
});