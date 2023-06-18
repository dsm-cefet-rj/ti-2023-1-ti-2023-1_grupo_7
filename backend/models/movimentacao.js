const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');
  
const movimentacaoSchema = new Schema({
  nome:{
    type: String,
    required: true,
  },
  tipo:{
    type: String,
    required: true,
  },
  valor:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cotacao',
  }
})

movimentacaoSchema.plugin(normalize);

var movimentacoes = mongoose.model('movimentacoes', movimentacaoSchema);

module.exports = movimentacaoSchema;