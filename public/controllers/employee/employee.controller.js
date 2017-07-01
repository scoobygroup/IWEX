angular.module('StudentApp').controller('EmployeeController', ['$scope', 'EmployeeService',
    function ($scope, EmployeeService) {

        function getEmployees() {
            // $scope.drivers = DriverService.get();
            EmployeeService.get().then(employees => {
                //console.log(employees);
                $scope.employees = employees;

            })
        };




        getEmployees();



        $scope.addEmployee = (employee) => {
            EmployeeService.add(employee).then(function (success) {

                $scope.getsupsucessmsg ='Successfull';
                getEmployees();
                //employee = {};
                employee.name="";
                employee.nic="";
                employee.contactNo="";
                employee.address="";
                employee.startDate="";
                employee.endDate="";
                employee.designation="";
                employee.basicSalary="";
                $scope.showAlert();
            }, function (error) {
                $scope.getsupsucessmsg ='Something Went Wrong!!!!';
                $scope.showAlert();
            });
        };


        $scope.showAlert = function(){
            $scope.mytrue = false;
            $scope.myfalse = false;
            console.log($scope.getsupsucessmsg);
            if($scope.getsupsucessmsg=="Successfull")
                $scope.mytrue = true;
            else if($scope.getsupsucessmsg=="Something Went Wrong!!!!")
                $scope.myfalse = true;
        };

        $scope.deleteEmployee = (id) => {
            EmployeeService.delete(id).then(function (success) {

                $scope.getsupsucessmsg ='Successfull';
                getEmployees();

                $scope.showAlert();
            }, function (error) {
                $scope.getsupsucessmsg ='Something Went Wrong!!!!';
                $scope.showAlert();
            });
        };



        $scope.editEmployee=function (id) {
            console.log(id);
            EmployeeService.getById(id).then((employee)=>{
                // console.log(employee);
                $scope.employee=employee;
                getEmployees();
            });
        };


        $scope.updateEmployee = (id,employee) => {
            EmployeeService.update(id,employee).then(function (success) {

                $scope.getsupsucessmsg ='Successfull';
                $scope.employees.name= employee.name;
                $scope.employees.nic= employee.nic;
                $scope.employees.contactNo= employee.contactNo;
                $scope.employees.address= employee.address;
                //$scope.employees.gender= employee.gender;
                $scope.employees.startDate= employee.startDate;
                $scope.employees.endDate= employee.endDate;
                $scope.employees.designation= employee.designation;
                $scope.employees.basicSalary= employee.basicSalary;

                getEmployees();

                $scope.showAlert();
            }, function (error) {
                $scope.getsupsucessmsg ='Something Went Wrong!!!!';
                $scope.showAlert();
            });
        };

    }]);


