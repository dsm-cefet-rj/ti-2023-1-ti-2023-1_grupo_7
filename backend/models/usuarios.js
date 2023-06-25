const mongoose = require('mongoose');
const Schemas = mongoose.Schema;

const dishSchema = new Schema({
    id:{
        type: String,
        required: true,
    },
    nome:{
        type: String,
        required: true,
    },
    perfil:{
        type: String,
        required: false,
    },
    senha:{
        type: JSON,
        required: true,
    }
})