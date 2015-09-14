var app = angular.module('app');
app.controller('ListController', function($scope, DataService, $location){
  $scope.something = "THIS WORKS, yeah";
  $scope.people = DataService.data;
    
  $scope.routeToPerson = function(idx){
     $location.url('/details/' + idx);
  }
});