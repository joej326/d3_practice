angular.module('myApp')
       .controller('mainCtrl', function($scope,mainService){

$scope.test = mainService.test;

$scope.weatherArray = mainService.weatherArray


})
