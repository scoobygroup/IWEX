'use strict';

angular.module('StudentApp').factory('StudentService', ['$http',
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
            get: () => $http.get('/students').then(response => response.data),
            add: student71 => $http.post('/students', student71).then(response => response.data),
            delete: id => $http.delete('/students/' + id).then(response => response.data),
            getById: id => $http.get('/students/' + id).then(response => response.data),
            update: (id,student) => $http.put('/students/'+id , student).then(response => response.data),
            addComment: (id, comment) => $http.post('/students/' + id + '/comments', comment).then(response => response.data),

        };
    }]);