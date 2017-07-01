/**
 * Created by User on 7/1/2017.
 */
/**
 * Created by User on 6/29/2017.
 */
/**
 * Created by User on 5/8/2017.
 */
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoomSchema = new Schema ({

        type: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }

    },
    {
        versionKey: false
    });

const room = mongoose.model('roomdetails', RoomSchema );
module.exports = room;

