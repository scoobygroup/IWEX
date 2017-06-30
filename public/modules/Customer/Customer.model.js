/**
 * Created by Bhagya Madushankha on 06/30/2017.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    birthdate: {
        type: Date,
    },
    gender: {
        type: String,
    },
    email: {
        type: String,
    },
    mobilenumber: {
        type: String,
    },
    address: {
        type: String,

    },
    country: {
        type: String,
    },
    bank: {
        type: String,
    },
    cardtype: {
        type: String,
    },
});

const Customer= mongoose.model('Customerlist', CustomerSchema);

module.exports = Customer;