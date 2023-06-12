var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Users = require('../models/users');

router.use(bodyParser .json());

router.route("/")
.get(async(req, res, next) =>{

  try{
  const userBanco = await Users.find({});
      res.statusCode= 200;
      res.setHeader('Content-type', 'application/json');
      res.json(userBanco);
    }catch(err){
      err = {};
      res.statusCode= 404;
      res.json(err);
  };
})


.post((req, res, next) => {
  Users.create(req.body);
  console.log('Movimentacao adicionada')
  //Ativos.push(red.body);
  res.statusCode= 200;
  res.setHeader('Content-type', 'application/json');
  res.json(Users);
})
.delete((req, res, next) =>{
  Users.findByIdAndRemove(req.param.id)
  .then((resp) => {
    statusCode= 200;
    res.setHeader('Content-type', 'application/json');
    res.json(resp.id);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put((req, res, next) =>{
  Users.findByIdAndUpdate(red.params.id, {$set: req.body}, ({new: true}))
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