'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const StockModel = mongoose.model('Stocklist')


const Router = express.Router();

Router.get('/', (req, res) => {
    StockModel.find().exec().then(stocks => {
        res.json(stocks);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    StockModel.findById(req.params.id).exec().then(stock => {
        res.json(stock || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const stock = new StockModel(req.body);
    stock.save().then(stock => {
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
     StockModel.findByIdAndUpdate(studentId, {$set: stock}).then(studentDb => {
     res.json(stock);
     }).catch(err => {
     console.error(err);
     res.sendStatus(500);
     });*/

    const user=new StockModel({_id:req.params.id});
    user.update(req.body).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});
/*
 Router.delete('/:id', (req, res) => {
 StockModel.findByIdAndRemove(req.params.id).then(() => {
 res.sendStatus(200);
 }).catch(err => {
 console.error(err);
 res.sendStatus(500);
 });
 });
 */

Router.delete('/:id',(req,res)=>{
    StockModel.remove({_id:req.params.id}).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        res.sendStatus(500);
    });
});


module.exports = Router;