/**
 * Created by User on 6/29/2017.
 */
'use strict';

angular.module('StudentApp').factory('ReservationService', ['$http',
    function ($http) {
        //const students = [];

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
            get: () => $http.get('/newreservations').then(response => response.data),
            add: reserv => $http.post('/newreservations', reserv).then(response => response.data),

            delete: id => $http.delete('/newreservations/' + id).then(response => response.data),
            getById: id => $http.get('/newreservations/' + id).then(response => response.data),
            update: (id,resv) => $http.put('/newreservations/'+id , resv).then(response => response.data),
            addComment: (id, comment) => $http.post('/newreservations/' + id + '/comments', comment).then(response => response.data),

        };
    }]);