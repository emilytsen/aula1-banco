
//estruutura inicial para criar um servidor
//
/* esse códico pose ser usado para qualquer criação de um banco:
use lojavirtual; 

CREATE TABLE IF NOT EXISTS products(
	id BIGINT(11) AUTO_INCREMENT,
    nome VARCHAR(200),
    price DECIMAL(10,2),
    PRIMARY KEY (id)
); 

SELECT * FROM products;

INSERT INTO products VALUE(1,'Batata',1.00);
INSERT INTO products(nome, price) VALUE('Cartela de Ovo',10.00);
INSERT INTO products(nome, price) VALUE('Cacetinho',3.50);

ALTER USER 'root'
IDENTIFIED WITH
mysql_native_password BY 'root';

FLUSH PRIVILEGES; 
*/

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


app.use(cors({ 
    origin: '*'
    //origem da conexão não importa 
}));

app.listen(9001,'0.0.0.0', function(){
    console.log("Aplicatação rodando na porta: 9001");
    //porta que vqi acessar 
    //printar se a conexão ccesta rodando
});