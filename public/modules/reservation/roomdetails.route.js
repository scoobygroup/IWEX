/**
 * Created by User on 7/1/2017.
 */

'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const RoomModel = mongoose.model('roomdetails');


const Router = express.Router();

Router.get('/', (req, res) => {
    RoomModel.find().exec().then(resp => {
        res.json(resp);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});



Router.get('/:id', (req, res) => {
    RoomModel.findById(req.params.id).exec().then(reserv => {
        res.json(reserv || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const r = new RoomModel(req.body);
    r.save().then(r => {
        res.sendStatus(200);

    }).catch(err => {
        console.error(err);

        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {

    const user=new RoomModel({_id:req.params.id});
    user.update(req.body).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});


Router.delete('/:id',(req,res)=>{
    RoomModel.remove({_id:req.params.id}).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        res.sendStatus(500);
    });
});




module.exports = Router;