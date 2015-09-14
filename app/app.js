var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/list', {
            template: ('<div ng-repeat="person in people track by $index">'
                     +'     <span ng-click="routeToPerson($index)"> {{person.name}}</a>'
                     +'</div>'),
            controller: 'ListController',
        })
        .when('/details', {
           redirectTo: '/details/0'
        })
        .when('/details/:personId', {
            templateUrl: 'app/templates/details_template.html',
            controller: 'DetailsController'
        })
        .when('settings', {})
    
    
});

/*
http://127.0.0.1:65230/index.html#settings
*/