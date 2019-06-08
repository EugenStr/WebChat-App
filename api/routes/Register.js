const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const hasher = require('wordpress-hash-node');

const User = require('../models/register')

router.get('/', (req, res, next) => {
  User.find()
    .exec()
    .then(docs => {
      console.log(docs);
      if (docs.length >= 0) {
        res.status(200).json(docs)
      } else {
        res.status(404).json({
          message: 'db empty'
        })
      }

    }).catch(err=> {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })
})

router.post('/', (req, res) => {
  User.find({email: req.body.email})
      .exec()
      .then(result => {
        if (result.length > 0) {
          res.status(409).json({
            message: 'Данный email уже используется'
          })
        }
        else {

          const hashPassword = hasher.HashPassword(req.body.password);
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            surname: req.body.surname,
            password: hashPassword,
            email: req.body.email,
            avatar: 'https://dubravaorel.ru/wp-content/uploads/2018/09/no-translate-detected_318-35708.jpg'
          });

          user
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
        }
      })


});

router.get("/:userID", (req, res, next) => {
  const id = req.params.userID;
  User.findById(id)
    .exec()
    .then(doc => {
      res.status(200).json(doc)
    }).catch(err => {
      res.status(500).json({error: err})
    })

})

router.delete("/:userId", (req, res, next) => {
  const id = req.params.userId;
  User.remove({_id: id})
  .exec()
  .then(result => {
    res.status(200).json(result)
  }).catch(err => {
    console.log(err)
    res.status(500).json({error: err})
  })
})


module.exports = router;
