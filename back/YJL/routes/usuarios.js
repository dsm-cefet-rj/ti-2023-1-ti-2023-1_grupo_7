var express = require('express');
var router = express.Router();

/* GET users listing. */
let usuarios = [
  {
    "id": "cobaia@cobaia",
    "nome": "cobaia",
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
