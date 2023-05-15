const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ativoSchema = new Schema({
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
module.exports = ativoSchema;