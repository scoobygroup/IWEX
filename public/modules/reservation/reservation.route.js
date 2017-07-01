/**
 * Created by User on 6/29/2017.
 */
'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const ReservationModel = mongoose.model('ReservationNEW');


const Router = express.Router();

Router.get('/', (req, res) => {
    ReservationModel.find().exec().then(resp => {
        res.json(resp);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

/*Router.get('/sum', (req, res) => {
 db.roomdetails.aggregate({
 $group: {
 _id: '',
 amount: { $sum: '$amount' }
 }
 }).populate('comments').exec().then(resp => {
 res.json(resp);
 console.log('sum'+resp);
 }).catch(err => {
 console.error(err);
 res.sendStatus(500);
 });
 });*/

Router.get('/:id', (req, res) => {
    ReservationModel.findById(req.params.id).exec().then(reserv => {
        res.json(reserv || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const r = new ReservationModel(req.body);
    r.save().then(r => {
        res.sendStatus(200);

    }).catch(err => {
        console.error(err);

        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {

    const user=new ReservationModel({_id:req.params.id});
    user.update(req.body).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});


Router.delete('/:id',(req,res)=>{
    ReservationModel.remove({_id:req.params.id}).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        res.sendStatus(500);
    });
});




module.exports = Router;