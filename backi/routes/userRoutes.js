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
router.patch('/:id', async (req, res) =>{
  const id = req.params.id

  const {email, nome, senha} = req.body

  const user = {
    email,
    nome,
    senha,
  }
  const updatedUser = await User.updateOne({_id: id, user})
  
  try{
    if(updatedUser.matchedCount === 0){
      res.status(422).json({message:'O usuários não foi encontrado'})
      return
    }
    res.status(200).json(user)
  }catch(error){
    res.status(500).json({error:error})
  }
})

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