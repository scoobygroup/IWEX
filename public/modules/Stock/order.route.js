'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const OrderModel = mongoose.model('Orderlist')


const Router = express.Router();

Router.get('/', (req, res) => {
    OrderModel.find().exec().then(orders => {
        res.json(orders);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    OrderModel.findById(req.params.id).exec().then(order => {
        res.json(order || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const order = new OrderModel(req.body);
    order.save().then(order => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {
    /*const order = req.body;
     delete order._id;
     const studentId = req.params.id;
     OrderModel.findByIdAndUpdate(studentId, {$set: order}).then(studentDb => {
     res.json(order);
     }).catch(err => {
     console.error(err);
     res.sendStatus(500);
     });*/

    const user=new OrderModel({_id:req.params.id});
    user.update(req.body).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});
/*
 Router.delete('/:id', (req, res) => {
 OrderModel.findByIdAndRemove(req.params.id).then(() => {
 res.sendStatus(200);
 }).catch(err => {
 console.error(err);
 res.sendStatus(500);
 });
 });
 */

Router.delete('/:id',(req,res)=>{
    OrderModel.remove({_id:req.params.id}).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        res.sendStatus(500);
    });
});


module.exports = Router;