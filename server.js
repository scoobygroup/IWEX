'use strict';

const bodyParser = require('body-parser'),
express = require('express'),
mongoose = require('mongoose');

mongoose.Promise = global.Promise;

require('./public/modules/student/student.model.js');
require('./public/modules/comment/comment.model');
const StudentRouter = require('./public/modules/student/student.route');

//stock Managment
require('./public/modules/Stock/stock.model.js');
const StockRouter = require('./public/modules/Stock/stock.route');

//order Managment
require('./public/modules/Stock/order.model.js');
const OrderRouter = require('./public/modules/Stock/order.route');

//customer Managment
require('./public/modules/Customer/Customer.model.js');
const CustomerRouter = require('./public/modules/Customer/Customer.route');

//reservation
require('./public/modules/reservation/reservation.model');
require('./public/modules/reservation/roomdetails.model');
const reservationRouter=require('./public/modules/Reservation/Reservation.route');
const roomRouter=require('./public/modules/Reservation/roomdetails.route');

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/public'));
//app.use('/app/modules', express.static(__dirname + '/bower_components'));

app.use('/stocks', StockRouter);
app.use('/orders', OrderRouter);
app.use('/customers', CustomerRouter);
app.use('/newreservations', reservationRouter);
app.use('/roomdetailss', roomRouter);

mongoose.connect('mongodb://hotel:neomalperera<3@ds133261.mlab.com:33261/iwex', err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    else {
        console.log('db connected');
    }
});


app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/HomePage.html');
});

app.get('/*', (req, res, next) => {
    res.sendFile(__dirname + '/HomePage.html');
});

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});