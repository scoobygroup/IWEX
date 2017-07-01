'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    basicSalary: {
        type: String,
        required: true
    }

});

const Employee= mongoose.model('EmployeeCollection', EmployeeSchema);

module.exports = Employee;