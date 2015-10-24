var app = angular.module('app', ['ngRoute']);

/*
    List
    Details
    Settings
*/

app.config(['$routeProvider', function($routeProvider){
    
    $routeProvider
        .when('/people', {
            templateUrl :       'app/templates/list_template.html',
            controller : 'ListController'
        })
        .when('/details/:myIndexId', {
            templateUrl: 'app/templates/details_template.html',
            controller: 'DetailsController'
        })
        .when('/admin', {
            template: 'Yay, you are an admin! {{name}}',
            controller: 'AdminController',
            resolve: {
                message : function(){
                    return "Winner winner chicken dinner"
                }
            }
        })
        .otherwise({
            redirectTo: '/people'
        })
}])