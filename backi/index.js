const express = require('express')
const app = express()
const mongoose = require('mongoose')


//formar de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

//rotas da API
const userRoutes = require('./routes/userRoutes')

app.use('/user', userRoutes)

//rota inicial / endpoint
app.get('/', (req,res) => {
  res.json({message: 'Oi Express!'})
})
//entregar uma porta
const DB_USER = 'yurichaves'
const DB_PASSWORD = 'lAOYMkAve9wF9P4u'
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.r9jv8wp.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
  console.log("Conectamos ao MongoDB")
  app.listen(5000)
})
.catch((err) => console.log(err))


//mongodb+srv://yurichaves:lAOYMkAve9wF9P4u@cluster0.r9jv8wp.mongodb.net/?retryWrites=true&w=majority