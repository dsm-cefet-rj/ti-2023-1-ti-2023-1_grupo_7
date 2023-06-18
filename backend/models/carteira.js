const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');
  
const carteiraSchema = new Schema({
  nome:{
    type: String,
    required: true,
  },
  email:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'email',
  },
  ativos:{
    type: String,
    required: true,
  }
})

carteiraSchema.plugin(normalize);

var carteiras = mongoose.model('carteira', carteiraSchema);

module.exports = carteiraSchema;