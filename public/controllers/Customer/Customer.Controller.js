/**
 * Created by Bhagya Madushankha on 06/30/2017.
 */
angular.module('StudentApp').controller('CustomerController', ['$scope', 'CustomerService',
    function ($scope, CustomerService) {

        function getCustomers() {
            // $scope.drivers = DriverService.get();
            CustomerService.get().then(customers => {
                //console.log(stocks);
                $scope.customerlist = customers;
            })
        };


        getCustomers();


        $scope.addCustomer = (customer) => {
            CustomerService.add(customer).then(() => {
                //console.log(stock.name);
                getCustomers();
                //stock = {};
                customer.firstname=""
                customer.lastname=""
                customer.birthdate=""
                customer.gender=""
                customer.email=""
                customer.mobilenumber=""
                customer.address=""
                customer.country=""
                customer.bank=""
                customer.cardtype
            });
        };

        $scope.deleteCustomer = (id) => {
            CustomerService.delete(id).then(() => {
                getCustomers();
                //console.log(id);
                //stock = {};
            });
        };

        $scope.editCustomer = function (id) {
            console.log(id);
            CustomerService.getById(id).then((customer)=>{
                // console.log(customer);
                $scope.Customer = customer;
                getCustomers();
            });
        };


        $scope.updateCustomer = (id,customer) => {
            CustomerService.update(id,customer).then(() => {
                //console.log($scope.students123.name22);
                //console.log(customer.name22);
                $scope.customerlist.firstname =customer.firstname
                $scope.customerlist.lastname =customer.lastname
                $scope.customerlist.birthdate =customer.birthdate
                $scope.customerlist.gender =customer.gender
                $scope.customerlist.email =customer.email
                $scope.customerlist.mobilenumber  =customer.mobilenumber
                $scope.customerlist.address =customer.address
                $scope.customerlist.country =customer.country
                $scope.customerlist.bank =customer.bank
                $scope.customerlist.cardtype =customer.cardtype
                getCustomers();

                //stock = {};
            });
        };

    }]);