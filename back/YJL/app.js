var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var ativosRouter = require('./routes/ativos');
var carteirasRouter = require('./routes/carteiras');

const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/YJL';
const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log("Connected correctly to server");
}, (err)=>{console.log(err);});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/ativos', ativosRouter);
app.use('/carteiras', carteirasRouter);

module.exports = app;
