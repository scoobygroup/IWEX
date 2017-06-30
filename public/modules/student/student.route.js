'use strict';

const express = require('express'),
mongoose = require('mongoose');

mongoose.set('debug', false);

const StudentModel = mongoose.model('Student13'),
CommentModel = mongoose.model('Comment');

const Router = express.Router();

Router.get('/', (req, res) => {
    StudentModel.find().populate('comments').exec().then(students18 => {
        res.json(students18);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    StudentModel.findById(req.params.id).populate('comments').exec().then(student => {
        res.json(student || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const student = new StudentModel(req.body);
    student.save().then(student => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {
    /*const student = req.body;
    delete student._id;
    const studentId = req.params.id;
    StudentModel.findByIdAndUpdate(studentId, {$set: student}).then(studentDb => {
        res.json(student);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });*/

    const user=new StudentModel({_id:req.params.id});
    user.update(req.body).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});
/*
Router.delete('/:id', (req, res) => {
    StudentModel.findByIdAndRemove(req.params.id).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});
*/

Router.delete('/:id', (req, res) => {
    StudentModel.findByIdAndRemove(req.params.id).then((Student) => {
        const commentIds = Student.comments.map((commentId => commentId));
        return CommentModel.remove({_id: {$in: commentIds}});
    }).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/:id/comments', (req, res) => {
    let comment = new CommentModel(req.body);
    const studentId = req.params.id;
    comment.student99 = studentId;
    comment.save().then(commentDb => {
        return StudentModel.findByIdAndUpdate(studentId, {$push: {"comments": commentDb._id}})
    }).then(() => {
        return StudentModel.findById(studentId).populate('comments').exec();
    }).then(studentDb => {
        res.json(studentDb);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});


module.exports = Router;