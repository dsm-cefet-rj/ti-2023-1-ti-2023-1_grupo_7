var express = require('express');
var router = express.Router();

/* variável com listagem de ativos */
let ativos = [
    {
      "id": 1,
      "tipo": "Ação",
      "nome": "Vale",
      "valor": 100
    },
    {
      "id": 2,
      "tipo": "Ação",
      "nome": "BrMalls",
      "valor": 12
    },
    {
      "id": 3,
      "tipo": "Ação",
      "nome": "B2W",
      "valor": 45
    },
    {
      "id": 4,
      "tipo": "Ação",
      "nome": "IBOVESPA",
      "valor": 1000
    },
    {
      "id": 5,
      "tipo": "Renda Fixa",
      "nome": "CDB 180 dias",
      "valor": 100
    },
    {
      "id": 6,
      "tipo": "Renda Fixa",
      "nome": "CDB de liquidez diária",
      "valor": 10
    },
    {
      "id": 7,
      "tipo": "Fundo Imobiliário",
      "nome": "XP Crédito Imobiliário",
      "valor": 300
    },
    {
      "id": 8,
      "tipo": "Provento",
      "nome": "Dividendo - Vale",
      "valor": 500
    }
  ]

router.route('/')
.get(function(req, res, next) {
res.set('Access-control-allow-origin','*');
res.set('Access-control-allow-headers','Content-Type');
res.statusCode = 200;
res.setHeader('Content-Type','application/json');
res.json(ativos);
})
.post((req,res,next)=>{
res.set('Access-control-allow-origin','*');
res.set('Access-control-allow-headers','Content-Type');
ativos.push(req.body);
res.statusCode = 200;
res.setHeader('Content-Type','application/json');
res.json(ativos);
})
router.route('/:id')
.delete((req,res,next) =>{
res.set('Access-control-allow-origin','*');
res.set('Access-control-allow-headers','content-type');
ativos  = ativos.filter(function(value,index,arr){
    return value.id != req.params.id;
})
res.statusCode = 200;
res.setHeader('Content-Type','application/json');
res.json(ativos);
})
.put((req,res,next)=>{
  res.set('Access-control-allow-origin','*');
  res.set('Access-control-allow-headers','content-type');
  let index = ativos.map((c)=>c.id).indexOf(req.params.id);
  ativos.splice(index,1,req.body)

  res.statusCode = 200;
  res.setHeader('Content-Type','application/json');
  res.json(ativos);
})

module.exports = router;