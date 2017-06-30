'use strict';

angular.module('StudentApp').factory('OrderService', ['$http',
    function ($http) {
        //const orders = [];

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
            get: () => $http.get('/orders').then(response => response.data),
            add: order => $http.post('/orders', order).then(response => response.data),
            delete: id => $http.delete('/orders/' + id).then(response => response.data),
            getById: id => $http.get('/orders/' + id).then(response => response.data),
            update: (id,order) => $http.put('/orders/'+id , order).then(response => response.data),


        };
    }]);