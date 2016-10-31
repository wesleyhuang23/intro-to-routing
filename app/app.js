var app = angular.module('app', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider){

    $stateProvider.state('home', {
      templateUrl: '/app/templates/home_template.html',
      controller: 'ListController',
      url: '/home'
    })
    .state('details', {
      templateUrl:'/app/templates/details_template.html',
      controller: 'DetailsController',
      url: '/details/:detailId'
    });

    $urlRouterProvider.otherwise('/home');
});
