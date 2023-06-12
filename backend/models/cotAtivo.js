const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');
  
const cotAtivo = new Schema({
  ticker:{
    type: String,
    required: true,
  },
  data:{
    type: String,
    required: true,
  },
  cotacao:{
    type: Number,
    required: true,
  }
})

cotAtivoSchema.plugin(normalize);

var cotAtivos = mongoose.model('cotAtivos', cotAtivosSchema);

module.exports = cotAtivosSchema;

