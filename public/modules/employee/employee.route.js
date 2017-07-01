'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const EmployeeModel = mongoose.model('EmployeeCollection');

const Router = express.Router();

Router.get('/', (req, res) => {
    EmployeeModel.find().exec().then(employees => {
        res.json(employees);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    EmployeeModel.findById(req.params.id).exec().then(employee => {
        res.json(employee || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const employee = new EmployeeModel(req.body);
    employee.save().then(employee => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {
    /*const employee = req.body;
     delete employee._id;
     const studentId = req.params.id;
     EmployeeModel.findByIdAndUpdate(studentId, {$set: employee}).then(studentDb => {
     res.json(employee);
     }).catch(err => {
     console.error(err);
     res.sendStatus(500);
     });*/

    const user=new EmployeeModel({_id:req.params.id});
    user.update(req.body).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});
/*
 Router.delete('/:id', (req, res) => {
 EmployeeModel.findByIdAndRemove(req.params.id).then(() => {
 res.sendStatus(200);
 }).catch(err => {
 console.error(err);
 res.sendStatus(500);
 });
 });
 */

Router.delete('/:id',(req,res)=>{
    EmployeeModel.remove({_id:req.params.id}).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        res.sendStatus(500);
    });
});




module.exports = Router;