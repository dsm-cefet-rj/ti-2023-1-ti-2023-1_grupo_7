var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var movimentacoesRouter = require('./routes/movimentacao');
var carteirasRouter = require('./routes/carteira');

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/YJL';
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log('Connected correctly to server');
},(err) => {console.log(err);});


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movimentacoes', movimentacoesRouter);
app.use('/carteiras', carteirasRouter);

module.exports = app;
