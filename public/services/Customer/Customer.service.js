/**
 * Created by Bhagya Madushankha on 06/30/2017.
 */
'use strict';

angular.module('StudentApp').factory('CustomerService', ['$http',
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
            get: () => $http.get('/customers').then(response => response.data),
            add: customer => $http.post('/customers', customer).then(response => response.data),
            delete: id => $http.delete('/customers/' + id).then(response => response.data),
            getById: id => $http.get('/customers/' + id).then(response => response.data),
            update: (id,customer) => $http.put('/customers/'+id , customer).then(response => response.data),


        };
    }]);