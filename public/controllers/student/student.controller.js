 angular.module('StudentApp').controller('StudentController', ['$scope', 'StudentService',
    function ($scope, StudentService) {

        function getStudents() {
            // $scope.drivers = DriverService.get();
            StudentService.get().then(students20 => {
                //console.log(students);
                $scope.students123 = students20;
        })
        };


        getStudents();


        $scope.addStudent = (student44) => {
            StudentService.add(student44).then(() => {
                //console.log(student.name);
                getStudents();
                //student = {};
                student44.name22="";
                student44.age33="";
        });
        };

        $scope.deleteStudent = (id) => {
            StudentService.delete(id).then(() => {
                getStudents();
                //console.log(id);
                //student = {};
            });
        };

        $scope.editStudent=function (id) {
            console.log(id);
            StudentService.getById(id).then((student)=>{
               // console.log(student);
                $scope.student99=student;
                getStudents();
            });
        };


        $scope.updateStudent = (id,student) => {
            StudentService.update(id,student).then(() => {
                //console.log($scope.students123.name22);
                //console.log(student.name22);
                $scope.students123.name22 = student.name22;
                $scope.students123.age33 = student.age33;
                getStudents();

                //student = {};
            });
        };

    }]);