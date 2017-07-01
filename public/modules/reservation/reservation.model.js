/**
 * Created by User on 6/29/2017.
 */
/**
 * Created by User on 5/8/2017.
 */
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReservationSchema = new Schema ({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        nic: {
            type: String,
            required: true
        },
        checkin: {
            type: String,
            required: true
        },
        checkout: {
            type: String,
            required: true
        },
        nights: {
            type: String,
            required: true
        },
        noofrooms: {
            type: String,
            required: true
        },

    },
    {
        versionKey: false
    });

const reservation = mongoose.model('ReservationNEW', ReservationSchema );
module.exports = reservation;

