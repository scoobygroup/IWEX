angular.module('StudentApp').controller('OrderController', ['$scope', 'OrderService',
    function ($scope, OrderService) {

        function getOrders() {
            // $scope.drivers = DriverService.get();
            OrderService.get().then(orders => {
                //console.log(orders);
                $scope.orderlist = orders;
            })
        };


        getOrders();


        $scope.addOrder = (order) => {
            OrderService.add(order).then(() => {
                //console.log(order.name);
                getOrders();
                //order = {};
                order.ids=""
                order.iname=""
                order.department=""
                order.ename=""
                order.unit=""
                order.quantity=""
                order.rdate=""
            });
        };

        $scope.deleteOrder = (id) => {
            OrderService.delete(id).then(() => {
                getOrders();
                //console.log(id);
                //order = {};
            });
        };

        $scope.editOrder=function (id) {
            console.log(id);
            OrderService.getById(id).then((order)=>{
                // console.log(order);
                $scope.order1=order;
                getOrders();
            });
        };


        $scope.updateOrder = (id,order) => {
            OrderService.update(id,order).then(() => {
                //console.log($scope.students123.name22);
                //console.log(order.name22);
                $scope.orderlist.ids =order.ids
                $scope.orderlist.iname =order.iname
                $scope.orderlist.department =order.department
                $scope.orderlist.ename =order.ename
                $scope.orderlist.unit =order.unit
                $scope.orderlist.quantity  =order.quantity
                $scope.orderlist.rdate =order.rdate
                getOrders();

                //order = {};
            });
        };

    }]);