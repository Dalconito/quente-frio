const express = require('express');
const app = express();
const port = 3002;
const mensagem = "Servidor ON, Porta: "

app.use(express.static('./publico/'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home");
});

app.get('/sobre', function(req, res){
    res.render("sobre");
});

app.get('/cardapio', function(req,res){
    res.render("cardapio");
});

app.get('/tela', function(req,res){
    res.render("tela");
});

app.listen(port, function(req, res){
    console.log(mensagem, port);
});
