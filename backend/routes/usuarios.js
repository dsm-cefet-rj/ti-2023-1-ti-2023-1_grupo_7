var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Usuarios = require('../models/usuarios');

router.use(bodyParser.json());

/* variável com listagem de usuários */
let usuarios = [
  {
    "id": "cobaia@cobaia",
    "nome": "cobaia",
    "perfil": "Arrojado",
    "senha": {
      "words": [
        1668244065,
        1767967242,
        168430090,
        168430090
      ],
      "sigBytes": 6
    }
  },
  {
    "id": "abc@abc",
    "nome": "teste",
    "perfil": "Arrojado",
    "senha": {
      "words": [
        1633837837,
        218959117,
        218959117,
        218959117
      ],
      "sigBytes": 3
    }
  },
  {
    "id": "capi@vara",
    "nome": "capi",
    "perfil": "Conservador",
    "senha": {
      "words": [
        1667330153,
        1986097761,
        134744072,
        134744072
      ],
      "sigBytes": 8
    }
  },
  {
    "id": "joker@hotmail.com",
    "nome": "Coringa",
    "perfil": "Arrojado",
    "senha": {
      "words": [
        1650553965,
        1634601482,
        168430090,
        168430090
      ],
      "sigBytes": 6
    }
  },
  {
    "id": "jason@gmail.com",
    "nome": "Jason",
    "perfil": "Moderado",
    "senha": {
      "words": [
        825373492,
        202116108,
        202116108,
        202116108
      ],
      "sigBytes": 4
    }
  },
  {
    "id": "1@1",
    "nome": "1",
    "perfil": "Conservador",
    "senha": {
      "words": [
        823070479,
        252645135,
        252645135,
        252645135
      ],
      "sigBytes": 1
    }
  },
  {
    "id": "teste@email.com",
    "nome": "Yuri",
    "perfil": "Arrojado",
    "senha": {
      "words": [
        825373492,
        892733962,
        168430090,
        168430090
      ],
      "sigBytes": 6
    }
  },
  {
    "id": "6@3",
    "nome": "adjfp",
    "perfil": "Conservador",
    "senha": {
      "words": [
        909315598,
        235802126,
        235802126,
        235802126
      ],
      "sigBytes": 2
    }
  },
  {
    "id": "hjk@dry",
    "nome": "teste",
    "perfil": "Moderado",
    "senha": {
      "words": [
        823070479,
        252645135,
        252645135,
        252645135
      ],
      "sigBytes": 1
    }
  },
  {
    "id": "yed@yug",
    "nome": "gyu",
    "perfil": "Arrojado",
    "senha": {
      "words": [
        839847695,
        252645135,
        252645135,
        252645135
      ],
      "sigBytes": 1
    }
  }
]

router.route('/')


router.route('/')
//Implementação para mongoose, se descomentar comente o outro get
/*

.get((req,res,next)=>{
  Usuarios.find({})
  .then((usuariosBanco)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json(usuariosBanco);;
  }, (err) => next(err))
  .catch((err) => next(err));
})

*/
.get(function(req, res, next) {
  res.set('Access-control-allow-origin','*');
  res.set('Access-control-allow-headers','Content-Type');
  res.statusCode = 200;
  res.setHeader('Content-Type','application/json');
  res.json(usuarios);
})
.post((req,res,next)=>{
  res.set('Access-control-allow-origin','*');
  res.set('Access-control-allow-headers','Content-Type');
  usuarios.push(req.body);
  res.statusCode = 200;
  res.setHeader('Content-Type','application/json');
  res.json(usuarios);
})
router.route('/:id').delete((req,res,next) =>{
  res.set('Access-control-allow-origin','*');
  res.set('Access-control-allow-headers','content-type');
  usuarios  = usuarios.filter(function(value,index,arr){
    return value.id != req.params.id;
  })
  res.statusCode = 200;
  res.setHeader('Content-Type','application/json');
  res.json(usuarios);
})

module.exports = router;
