var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Movimentacoes = require('../models/carteira');

router.use(bodyParser .json());

router.route("/")
.get(async(req, res, next) =>{
  let err;
  try{
  const movimentacaoBanco = await Movimentacoes.find({});
      res.statusCode= 200;
      res.setHeader('Content-type', 'application/json');
      res.json(movimentacaoBanco);
    }catch(err){
      err = {};
      res.statusCode= 404;
      res.json(err);
  };
})
