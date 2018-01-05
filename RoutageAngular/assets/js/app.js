var app = angular.module('routage', ['ngRoute']);

/* Déclaration d'un controller */
app.controller('monController', function($scope,$routeParams){
    $scope.id = $routeParams.id;
});

app.config(function($routeProvider){
    $routeProvider
        .when('/home',{
        templateUrl:'home.html',
        controller:'monController'
    }).when('/recipe/:id',{
        templateUrl:'recipe.html',
        controller:'monController'
    }).when('/contact',{
        templateUrl:'contact.html',
        controller:'monController'
    }).otherwise({
       redirectTo:'/home' 
    });
    
    
});




