/**
 * Created by SANDUN on 6/30/2017.
 */
/**
 * Created by SANDUN on 6/29/2017.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    ids: {
        type: String,

    },
    iname: {
        type: String,

    },
    department: {
        type: String,

    },
    ename: {
        type: String,

    },
    unit: {
        type: String,

    },
    quantity: {
        type: String,


    },
    rdate: {
        type: Date,

    },
   });

const Order= mongoose.model('Orderlist', OrderSchema);

module.exports = Order;