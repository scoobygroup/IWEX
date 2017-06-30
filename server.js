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

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/public'));
//app.use('/app/modules', express.static(__dirname + '/bower_components'));

app.use('/stocks', StockRouter);
app.use('/orders', OrderRouter);

mongoose.connect('mongodb://localhost:27017/studentProfile', err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log("connect to db");
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