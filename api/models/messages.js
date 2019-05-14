const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  senderName: String,
  senderAvatar: String,
  sendTime: String,
  message: String
});


module.exports = mongoose.model('Messages', productSchema)
