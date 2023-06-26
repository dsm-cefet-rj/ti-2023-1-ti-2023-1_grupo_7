const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
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
    senha:{// a senha vai ser complicada por causa da criptografia recomendo pedir ajuda pro Nicolas e se ele perguntar o algoritmo tá em cadastroC, e sim eu sei que é ruim ter criptografia no front
        type: [{}],
        required: true,
    }
})

var Usuarios = mongoose.model('Usuarios',usuarioSchema);

module.exports = Usuarios;