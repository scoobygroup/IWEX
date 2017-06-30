/**
 * Created by SANDUN on 6/29/2017.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StockSchema = new Schema({
    ids: {
        type: String,

    },
    category: {
        type: String,

    },
    name: {
        type: String,

    },
    rdate: {
        type: Date,

    },
    edate: {
        type: Date,

    },
    unit: {
        type: String,


    },
    quantity: {
        type: String,

    },
    cost: {
        type: String,

    },
});

const Stock= mongoose.model('Stocklist', StockSchema);

module.exports = Stock;