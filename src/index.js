
//docker start -> comando para rodar o banco de dados

//npm init -> para iniciar um projeto do 0 em uma pasta vazia. 
//estruutura inicial para criar um servidor
//node index.js -> código para rodar o backend

//banco-aula1\frontend> ng new lojavirtual -> criar um projeto angualar dentro do node
//frontend\lojavirtual> ng serve --open -> código para rodar o angular dentro da pasta loja virtual frontend
 
const express = require('express');
//pacote express, salvou dentro de uma variável com o mesmo nome
const mysql = require('mysql');
//biblioteca da próprio mysql
const cors = require('cors');
//biblioteca para fazer conexão com o banco

const app = express();
//criar servidor local (api, estrutura)


//stocket TCP
const connection = mysql.createConnection({
    //estabelecendo os parametros para a conexão 
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lojavirtual'
});
connection.connect(); 
//conexão com o banco

app.use(cors({ 
    origin: '*'
    //origem da conexão não importa 
}));

//agora definir os endereços (via api)
app.get('/products', function(req,res){
//criar um endereço /products, toda vez que alguém chegar nesse endereço vai deparar com a função 
//req = request, res = response
    connection.query('SELECT * FROM products WHERE price >= 5 and category="Legume"', function(error,results){
        //'SELECT * FROM products WHERE price >= 5'     =    produtos de mais de 5 reais
        //and category="Legume"      =       e produtos com categoria de legume
        if(error) throw error;
        else{
            res.send(results)
        }
    })
    //consulta de listagem de produtos
})
//pegando tabela produto e colocando em uma função para tratar os dados 

app.get('/products/geladeira',function(req, res){ //font fez um get no caminho /product
    connection.query('SELECT * FROM products WHERE categoria="Geladeira"',function(error, results){
        if(error){
            throw error;
        }

        else{
            res.send(results)
        }
    })
})



app.listen(9001,'0.0.0.0', function(){
    console.log("Aplicatação rodando na porta: 9001");
    //porta que vqi acessar 
    //printar se a conexão ccesta rodando
});