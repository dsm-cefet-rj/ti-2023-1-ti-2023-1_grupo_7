const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');
  
const userSchema = new Schema({
  email:{
    type: String,
    required: true,
  },
  nome:{
    type: String,
    required: true,
  },
  senha:{
    type: String,
    required: true,
  }
})

userSchema.plugin(normalize);

var users = mongoose.model('users', userSchema);

module.exports = userSchema;