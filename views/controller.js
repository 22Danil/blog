let app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider) {
   $routeProvider
       .when('/', {
           template:"Welcome"
       })
       .when('/registration', {
           template: "qqqqqqqqqqqq"
       })
       .otherwise({
           redirectTo: "/"
       });
});