const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')


const User = require('../models/register')
const Messages = require('../models/messages')

router.get('/aside', (req, res) => {
  User.find()
    .exec()
    .then(docs => {
      res.status(200).json(docs)
    }).catch(err => {
      res.status(403).json({
        error: err
      })
    })
})

router.patch('/profile', (req, res) => {
  User.update({_id: req.body.id}, {$set: {name: req.body.name, surname: req.body.surname, avatar: req.body.avatar}})
    .then(() => {
      res.status(200).end()
    }).catch(err => {
      res.status(403).json({
        error: err
      })
    })
})

router.get('/chat', (req, res) => {
    Messages.find()
      .exec()
      .then(docs => {
        res.status(200).json(docs)
      })
      .catch(err => {
        res.status(403).json({
          error: err
        })
      })
})

router.post('/chat', (req, res) => {
  const message = new Messages({
    _id: new mongoose.Types.ObjectId(),
    senderName: req.body.sender,
    senderAvatar: req.body.avatar,
    sendTime: req.body.date,
    message: req.body.message
  })

  message
    .save()
    .then(result => {
     console.log(result);
     res.status(200).json({
       createdUser: result
     })
   }).catch(err => {
     console.log(err);
     res.status(500).json({
       error: err
     })
   });
})
module.exports = router
