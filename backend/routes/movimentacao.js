var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Movimentacoes = require('../models/movimentacao');

router.use(bodyParser.json());

/* GET users listing. */
router.route('/')
// .get(async (req, res, next) => {
//   try{
//     const movimentacaoBanco = await Movimentacoes.find({}).maxTime(5000);
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'application/json');
//     res.json(movimentacaoBanco);
//   }catch(err){
//   next(err);
// }
// })
.get(async(req, res, next) =>{
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

.post((req, res, next) => {
  Movimentacoes.create(req.body);
  console.log('Movimentacao adicionada')
  //Ativos.push(red.body);
  res.statusCode= 200;
  res.setHeader('Content-type', 'application/json');
  res.json(Movimentacoes);
})
.delete((req, res, next) =>{
  Movimentacoes.findByIdAndRemove(req.param.id)
  .then((resp) => {
    statusCode= 200;
    res.setHeader('Content-type', 'application/json');
    res.json(resp.id);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put((req, res, next) =>{
  Movimentacoes.findByIdAndUpdate(red.params.id, {$set: req.body}, ({new: true}))
  .then((Ativo) => {
    statusCode= 200;
    res.setHeader('Content-type', 'application/json');
    res.json(Ativos);
  }, (err) => next(err))
  .catch((err) => next(err));

})
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;