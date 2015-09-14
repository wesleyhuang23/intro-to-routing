var app = angular.module('app');
app.controller('DetailsController', function($scope, $routeParams, DataService){
    var person = DataService.data[$routeParams.personId];//DataService.data[2]
    $scope.name = person.name;
    $scope.description = person.description;
});