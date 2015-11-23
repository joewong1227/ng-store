app.controller("itemCtrl", function($scope) {
  $scope.items = [
    {
      id: 001,
      img: "img/item/001.jpg",
      name: "Cool T Shirt",
      price: 20,
      sort: 2,
      category: "Boy",
    },
    {
      id: 002,
      img: "img/item/002.jpg",
      name: "Nice Dress",
      price: 30,
      sort: 3,
      category: "Girl"
    },
    {
      id: 003,
      img: "img/item/003.jpg",
      name: "Fun T Shirt",
      price: 20,
      sort: 4,
      category: "Boy"
    },
    {
      id: 004,
      img: "img/item/003.jpg",
      name: "Cool T Shirt",
      price: 20,
      sort: 1,
      category: "Boy"
    },
    {
      id: 005,
      img: "img/item/002.jpg",
      name: "Cool Dress",
      price: 20,
      sort: 5,
      category: "Girl"
    },
    {
      id: 006,
      img: "img/item/001.jpg",
      name: "Cool T Shirt",
      price: 20,
      sort: 6,
      category: "Boy"
    },
  ]
});