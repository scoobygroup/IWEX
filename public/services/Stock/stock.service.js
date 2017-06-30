'use strict';

angular.module('StudentApp').factory('StockService', ['$http',
    function ($http) {
        //const stocks = [];

        // return {
        //     get: () => drivers,
        //     add: driver => {
        //         driver._id = Date.now();
        //         drivers.push(driver);
        //     },
        //     getById: id => {
        //         return drivers.find(driver => driver._id === parseInt(id));
        //     },
        //     addComment: (id, comment) => {
        //         const driver = drivers.find(driver => driver._id === parseInt(id));
        //         driver.comments.push({text: comment.text});
        //     }
        // };

        return {
            get: () => $http.get('/stocks').then(response => response.data),
            add: stock => $http.post('/stocks', stock).then(response => response.data),
            delete: id => $http.delete('/stocks/' + id).then(response => response.data),
            getById: id => $http.get('/stocks/' + id).then(response => response.data),
            update: (id,stock) => $http.put('/stocks/'+id , stock).then(response => response.data),


        };
    }]);