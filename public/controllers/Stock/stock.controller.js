angular.module('StudentApp').controller('StockController', ['$scope', 'StockService',
    function ($scope, StockService) {

        function getStocks() {
            // $scope.drivers = DriverService.get();
            StockService.get().then(stocks => {
                //console.log(stocks);
                $scope.stocklist = stocks;
            })
        };


        getStocks();


        $scope.addStock = (stock) => {
            StockService.add(stock).then(() => {
                //console.log(stock.name);
                getStocks();
                //stock = {};
                stock.ids=""
                stock.category=""
                stock.name=""
                stock.rdate=""
                stock.edate=""
                stock.unit=""
                stock.quantity=""
                stock.cost=""
            });
        };

        $scope.deleteStock = (id) => {
            StockService.delete(id).then(() => {
                getStocks();
                //console.log(id);
                //stock = {};
            });
        };

        $scope.editStock=function (id) {
            console.log(id);
            StockService.getById(id).then((stock)=>{
                // console.log(stock);
                $scope.stock1=stock;
                getStocks();
            });
        };


        $scope.updateStock = (id,stock) => {
            StockService.update(id,stock).then(() => {
                //console.log($scope.students123.name22);
                //console.log(stock.name22);
                $scope.stocklist.ids =stock.ids
                $scope.stocklist.category =stock.category
                $scope.stocklist.name =stock.name
                $scope.stocklist.rdate =stock.rdate
                $scope.stocklist.edate =stock.edate
                $scope.stocklist.unit  =stock.unit
                $scope.stocklist.quantity =stock.quantity
                $scope.stocklist.cost =stock.cost
                getStocks();

                //stock = {};
            });
        };

    }]);