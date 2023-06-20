var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Users = require('../models/users');

router.use(bodyParser .json());

const router = require('express').Router()
const User = require('../models/User')


//Criação de dados
router.post('/', async (req, res) =>{
  const {email, nome, senha} = req.body
  if(!nome){
    res.status(422).json({error: 'O nome é obrigatório'})
    return
  }
  const user = {
    email,
    nome,
    senha
  }
  try{
    await  User.create(user)
    res.status(201).json({message: 'Usuario criado'})
  }catch (error){
    res.status(500).json({error: error})
  }
})

// Read - leitura
router.get('/', async (req, res) => {
  try {
    const users = await User.find()

    res.status(200).json(users)
  }catch(error){
    res.status(500).json({error:error})
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id

  const user = await User.findOne({_id: id})

  try{
    if(!user){
      res.status(422).json({message:'O usuários não foi encontrado'})
      return
    }
    res.status(200).json(user)
  }catch(error){
    res.status(500).json({error:error})
  }
})

//Update - atualização
.put('/', async (req, res) =>{
  const user = await User.findByIdAndUpdate(red.params.id, {$set: req.body}, ({new: true}))
  .then((Ativo) => {
    statusCode= 200;
    res.setHeader('Content-type', 'application/json');
    res.json(user);
  }, (err) => next(err))
  .catch((err) => next(err));

})
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//delete - deletar dados
router.delete('/:id', async (req, res) =>{
  const id = req.params.id

  const user = await User.findOne({_id: id})
  if(!user){
    res.status(422).json({message:'O usuários não foi encontrado'})
    return
  }
  try{
    
    await User.deleteOne({_id: id})
      
    res.status(200).json({message:'Usuário removido com sucesso.'})
  }catch(error){
    res.status(500).json({error:error})
  }

})
module.exports = router





router.get("/", ())
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