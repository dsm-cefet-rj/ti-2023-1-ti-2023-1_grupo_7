const mongoose = require('mongoose')

const User = mongoose.model('User',{
  email:String,
  nome:String,
  senha:String,  
})

module.exports = User