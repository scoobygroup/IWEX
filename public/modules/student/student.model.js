'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name22: {
        type: String,
        required: true
    },
    age33: {
        type: String,
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

const Student= mongoose.model('Student13', StudentSchema);

module.exports = Student;

//
