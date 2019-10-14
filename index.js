const express = require("express");
const app = express();
const port = process.env.PORT || 3000;//porta 3000
const router = express.Router();
const handlebars = require ('express-handlebars');

console.log("Servidor na porta 3000");
console.log("Servidor iniciado com sucesso !");
//http://xxx/provasyscoin?user="syscoin"&password="meEscolhe"
//url_atual = window.location.href;
//console.log(url_atual);

//config
app.engine('handlebars',handlebars({defaultLayout: 'main'})) 
app.set('view engine','handlebars')


app.get('/provasyscoin', function (req, res) { 
    res.render('layouts/form');
    //res.json({mensagem:"Credenciais erradas."})
});

app.get('/requisicao', function (req, res) {  
    //res.json({mensagem:"Credenciais erradas."})
    //res.json({mensagem:"Meu nome completo é Caio Ítallo Souza Mendes. Eu quero essa vaga!"})
    params = new URLSearchParams('user=syscoin&password=meEscolhe');
    console.log(params.get('user'));
    usuario = params.get('user');
    console.log(params.get('password'));
    senha = params.get('password');
    if (usuario == 'syscoin' && senha == 'meEscolhe'){
        //res.json({mensagem:"Meu nome completo é Caio Ítallo Souza Mendes. Eu quero essa vaga!"})
        //console.log('Meu nome completo é Caio Ítallo Souza Mendes. Eu quero essa vaga!');
        res.json({mensagem:"Meu nome completo é Caio Ítallo Souza Mendes. Eu quero essa vaga!"})
    }else{
        //res.json({mensagem:"Credenciais erradas."}) 
        //console.log('Credenciais erradas.');
        res.json({mensagem:"Credenciais erradas."})
    }
});

app.listen(port, () => console.log("Servidor iniciado no http://localhost:3000/"));