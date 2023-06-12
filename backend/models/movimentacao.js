const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');
  
const movimentacaoSchema = new Schema({
  ticker:{
    type: String,
    required: true,
  },
  quantidade:{
    type: Number,
    required: true,
  },
  tipo_mov:{
    type: String,
    required: true,
  },
  tipo:{
    type: String;
    required: true,
  },
  preco:{
    type: Number,
    required: true,
  },
  valor_investido:{
    type: Number,
    required: false,
  },
  saldo_atual:{
    type: Number,
    required: false,
  },
  variacao_atual:{
    type: Number,
    required: false,
  },
  variacao_atual_percent:{
    type: Number,
    required: false,
  }
})

movimentacaoSchema.plugin(normalize);

var movimentacoes = mongoose.model('ativos', movimentacaoSchema);

module.exports = movimentacaoSchema;