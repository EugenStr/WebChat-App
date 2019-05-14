const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const hasher = require('wordpress-hash-node');
const cookieParser = require('cookie-parser');
const session = require('express-session')

const User = require('../models/register')

router.get('/homeRedirect', (req, res) => {
  if (!req.session.userID) {
      res.status(200).end()
  }
  else {
    res.status(401).end()
  }
})

router.get('/', (req, res) => {
  if (req.session.userID) {
    User.find({_id: req.session.userID}).then(doc => {
      res.status(200).json(doc)
    })
  }
  else {
    res.status(401).end()
  }
})

router.post('/', (req, res, next) => {
  User.find({email: req.body.email})
      .exec()
      .then(docs => {
        if (docs.length > 0) {
          const user = docs[0];
          const checked = hasher.CheckPassword(req.body.password, user.password);
          if (checked) {
              req.session.userID = user._id
              res.status(200).end()
          } else {
            res.status(403).json({
              message: "Error: Неверный пароль"
            })
          }
        } else {
          res.status(404).json({
            message: 'Error: Логин не найден'
          })
        }
     })
})

router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.status(400).end()
    }

    res.clearCookie('sid')
    res.status(200).end()
  })

})
module.exports = router
