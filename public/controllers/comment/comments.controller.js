'use strict';

angular.module('StudentApp').controller('CommentsController', ['$scope', '$routeParams', 'StudentService',
    function ($scope, $routeParams, StudentService) {

        function getStudent() {
            // $scope.driver = DriverService.getById($routeParams.id);
            StudentService.getById($routeParams.id).then(student => {
                $scope.student99 = student;
            });
        }

        getStudent();

        $scope.addComment = (id, comment) => {
            StudentService.addComment(id, comment).then((student) => {
                $scope.student99 = student;
                comment.text = '';
            });
            // getDriver();
        };
    }]);
