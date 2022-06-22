const { response } = require('express');
var express = require('express');
var {engine} = require('express-handlebars');
var bp = require('body-parser');
var app = express();

var parcerias = [];
var calcados = [];

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(bp.urlencoded({extended: false}))
app.use(bp.json());

app.use(express.static('public'))

app.get('/',function(request, response){
    response.render('index', {calcados});
});
app.get('/cadastro', function(request, response){
    response.render('cadastro');
});
app.get('/parcerias', function(request, response){
    response.render('parcerias', {parcerias});
});
app.get('/cadastroparceria', function(request, response){
    response.render('cadastroparceria');
});
app.get('/fabricacao', function(request, response){
    response.render('fabricacao');
});

app.post('/cadastroparceria', function(request, response){
    nome = request.body.nome;
    anos = request.body.anos;
    contato = request.body.contato;
    parceria = {
        "nome": nome,
        "anos": anos,
        "contato": contato
    };
    if(request.body.anos >= 1){
        parcerias.push(parceria);
    }
    response.redirect('/parcerias');
})
app.post('/cadastro', function(request, response){
    modelo = request.body.txtModelo 
    cor = request.body.txtCor
    descricao = request.body.txtDescricao
    material = request.body.txtMaterial
    valor = request.body.numValor
    calcado = {
        "modelo": modelo,
        "cor": cor,
        "descricao": descricao,
        "material": material,
        "valor": valor
    }
    calcados.push(calcado);
    response.redirect('/');
})

app.listen(3000);