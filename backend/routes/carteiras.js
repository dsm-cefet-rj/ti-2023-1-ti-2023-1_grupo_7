var express = require('express');
var router = express.Router();

/* variável com listagem de carteiras */
let carteiras = [
  {
    "id": 1,
    "nome": "vazia",
    "email": "jason@gmail.com",
    "ativos": []
  },
  {
    "id": 2,
    "nome": "esperanças",
    "email": "jason@gmail.com",
    "ativos": [
      {
        "id": 1,
        "id_ativo": 3,
        "qnt": 14,
        "dia": 23,
        "mes": 5,
        "ano": 2023
      },
      {
        "id": 2,
        "id_ativo": 4,
        "qnt": 11,
        "dia": 23,
        "mes": 5,
        "ano": 2023
      },
      {
        "id": 3,
        "id_ativo": 7,
        "qnt": 22,
        "dia": 23,
        "mes": 5,
        "ano": 2023
      }
    ]
  },
  {
    "id": 3,
    "nome": "meus investimentos",
    "email": "jason@gmail.com",
    "ativos": [
      {
        "id": 1,
        "id_ativo": 1,
        "qnt": 1,
        "dia": 7,
        "mes": 4,
        "ano": 2023
      },
      {
        "id": 2,
        "id_ativo": 2,
        "qnt": 10,
        "dia": 15,
        "mes": 4,
        "ano": 2023
      },
      {
        "id": 3,
        "id_ativo": 5,
        "qnt": 4,
        "dia": 30,
        "mes": 4,
        "ano": 2023
      },
      {
        "id": 4,
        "id_ativo": 6,
        "qnt": 3,
        "dia": 12,
        "mes": 5,
        "ano": 2023
      },
      {
        "id": 5,
        "id_ativo": 6,
        "qnt": 3,
        "dia": 23,
        "mes": 5,
        "ano": 2023
      }
    ]
  },
  {
    "id": 5,
    "nome": "teste",
    "email": "1@1",
    "ativos": [
      {
        "id": 1,
        "id_ativo": 7,
        "qnt": 2,
        "dia": 12,
        "mes": 4,
        "ano": 2023
      },
      {
        "id": 2,
        "id_ativo": 2,
        "qnt": 2,
        "dia": 25,
        "mes": 6,
        "ano": 2023
      }
    ]
  }
]
router.route('/')
.get(function(req, res, next) {
  res.set('Access-control-allow-origin','*');
  res.set('Access-control-allow-headers','Content-Type');
  res.statusCode = 200;
  res.setHeader('Content-Type','application/json');
  res.json(carteiras);
})
.post((req,res,next)=>{
  res.set('Access-control-allow-origin','*');
  res.set('Access-control-allow-headers','Content-Type');
  carteiras.push(req.body);
  res.statusCode = 200;
  res.setHeader('Content-Type','application/json');
  res.json(carteiras);
})
router.route('/:id')
.delete((req,res,next) =>{
  res.set('Access-control-allow-origin','*');
  res.set('Access-control-allow-headers','content-type');
  carteiras  = carteiras.filter(function(value,index,arr){
    return value.id != req.params.id;
  })
  res.statusCode = 200;
  res.setHeader('Content-Type','application/json');
  res.json(carteiras);
})
.put((req,res,next)=>{
  res.set('Access-control-allow-origin','*');
  res.set('Access-control-allow-headers','content-type');
  let index = carteiras.map((c)=>c.id).indexOf(req.params.id);
  carteiras.splice(index,1,req.body)

  res.statusCode = 200;
  res.setHeader('Content-Type','application/json');
  res.json(carteiras);
})

module.exports = router;