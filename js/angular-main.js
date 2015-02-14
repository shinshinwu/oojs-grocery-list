
// defining module
(function(){
  var app = angular.module('list', []);

  // defining controller
  app.controller('ListController', function($scope){
    $scope.items = groceries
  });

  var groceries = [
    {name: 'Apple', price: 0.69},
    {name: 'Tofu', price: 3.49},
    {name: 'Granola', price: 4.55},
    {name: 'Flatbread', price: 6.21},
    {name: 'Zucchina', price: 1.22},
    {name: 'Organic beef', price: 12.99},
  ];
})();