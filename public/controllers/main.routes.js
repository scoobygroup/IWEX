'use strict';

angular.module('StudentApp').config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/studentPage', {
            templateUrl: 'views/student/student.list.html',
            controller: 'StudentController'
        }).when('/comments/:id', {
            templateUrl: 'views/comment/comments.list.html',
            controller: 'CommentsController'
        }).when('/stockPage', {
            templateUrl: 'views/Stock/StockManagment.html',
            controller: 'StockController'
        }).when('/orderPage', {
            templateUrl: 'views/Stock/OrderManagment.html',
            controller: 'OrderController'
        }).otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
    }]);