var express = require('express');
var router = express.Router();

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
          "id": 3,
          "qnt": 14
        },
        {
          "id": 4,
          "qnt": 11
        },
        {
          "id": 7,
          "qnt": 22
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
          "qnt": 1
        },
        {
          "id": 2,
          "qnt": 10
        },
        {
          "id": 5,
          "qnt": 5
        },
        {
          "id": 6,
          "qnt": 3
        }
      ]
    },
    {
      "id": 4,
      "nome": "rico",
      "email": "joker@hotmail.com",
      "ativos": [
        {
          "id": 1,
          "qnt": 10
        },
        {
          "id": 2,
          "qnt": 3
        },
        {
          "id": 3,
          "qnt": 28
        },
        {
          "id": 4,
          "qnt": 100
        },
        {
          "id": 5,
          "qnt": 45
        },
        {
          "id": 6,
          "qnt": 13
        },
        {
          "id": 7,
          "qnt": 15
        },
        {
          "id": 8,
          "qnt": 2
        }
      ]
    },
    {
      "id": 5,
      "nome": "teste",
      "email": "1@1",
      "ativos": [
        {
          "id": 7,
          "qnt": 2
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
router.route('/:id').delete((req,res,next) =>{
  res.set('Access-control-allow-origin','*');
  res.set('Access-control-allow-headers','content-type');
  carteiras  = carteiras.filter(function(value,index,arr){
    return value.id != req.params.id;
  })
  res.statusCode = 200;
  res.setHeader('Content-Type','application/json');
  res.json(carteiras);
})

module.exports = router;