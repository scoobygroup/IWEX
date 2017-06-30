/**
 * Created by Bhagya Madushankha on 06/30/2017.
 */
'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const CustomerModel = mongoose.model('Customerlist')


const Router = express.Router();

Router.get('/', (req, res) => {
    CustomerModel.find().exec().then(customers => {
        res.json(customers);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    CustomerModel.findById(req.params.id).exec().then(customer => {
        res.json(customer || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const customer = new CustomerModel(req.body);
    customer.save().then(customer => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {
    /*const stock = req.body;
     delete stock._id;
     const studentId = req.params.id;
     CustomerModel.findByIdAndUpdate(studentId, {$set: stock}).then(studentDb => {
     res.json(stock);
     }).catch(err => {
     console.error(err);
     res.sendStatus(500);
     });*/

    const user=new CustomerModel({_id:req.params.id});
    user.update(req.body).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});
/*
 Router.delete('/:id', (req, res) => {
 CustomerModel.findByIdAndRemove(req.params.id).then(() => {
 res.sendStatus(200);
 }).catch(err => {
 console.error(err);
 res.sendStatus(500);
 });
 });
 */

Router.delete('/:id',(req,res)=>{
    CustomerModel.remove({_id:req.params.id}).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        res.sendStatus(500);
    });
});


module.exports = Router;