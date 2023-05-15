var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Ativos = require('../models/ativos');

/* GET users listing. */
router.route('/')
.get((req, res, next) => {
  Ativos.find({})
    .then((ativosBanco)=> {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(ativosBanco);
}, (err) => next(err))
.catch((err) => next(err));
})
.post((req, res, next) => {
  ativos.push(red.body);
  res.statusCode= 200;
  res.setHeader('Content-type', 'application/json');
  res.json(ativos);
})
.delete((req, res, next) =>{
  ativos - ativos.filter((value, index, arr) => {return value.id != req.params.id;})
});
.put((req, res, next) =>{
  let index = ativos.map(p =>p.id).index(req.params.id);
  ativos.splice(index, 1, req.body);

  statusCode= 200;
  res.setHeader('Content-type', 'application/json');
  res.json(ativos);
})
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
