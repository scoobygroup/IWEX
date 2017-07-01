/**
 * Created by User on 7/1/2017.
 */
/**
 * Created by User on 6/29/2017.
 */
'use strict';

angular.module('StudentApp').factory('RoomService', ['$http',
    function ($http) {


        return {
            get: () => $http.get('/roomdetailss').then(response => response.data),
            add: reserv => $http.post('/roomdetailss', reserv).then(response => response.data),

            delete: id => $http.delete('/roomdetailss/' + id).then(response => response.data),
            getById: id => $http.get('/roomdetailss/' + id).then(response => response.data),
            update: (id,resv) => $http.put('/roomdetailss/'+id , resv).then(response => response.data),
            addComment: (id, comment) => $http.post('/roomdetailss/' + id + '/comments', comment).then(response => response.data),

        };
    }]);