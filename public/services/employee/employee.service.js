'use strict';

angular.module('StudentApp').factory('EmployeeService', ['$http',
    function ($http) {

        return {
            get: () => $http.get('/employees').then(response => response.data),
            add: employee => $http.post('/employees', employee).then(response => response.data),
            delete: id => $http.delete('/employees/' + id).then(response => response.data),
            getById: id => $http.get('/employees/' + id).then(response => response.data),
            update: (id,employee) => $http.put('/employees/'+id , employee).then(response => response.data),
            addComment: (id, comment) => $http.post('/employees/' + id + '/comments', comment).then(response => response.data),

        };
    }]);