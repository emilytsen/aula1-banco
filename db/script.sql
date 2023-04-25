
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


/*
esse código sql é para ser rodado em um banco de dados (mySQL workbench)
*/
/*criar banco*/
create database lojavirtual;

use lojavirtual; 
/* usar banco lojavirtual */

CREATE TABLE IF NOT EXISTS products(
    /*criar uma tabela se ela não existir ainda*/
	id BIGINT(11) AUTO_INCREMENT, 
    /*bigint, cabe um número maior que int */   
    nome VARCHAR(200),
    price DECIMAL(10,2),
    PRIMARY KEY (id) 
); 

describe products; 
/*descrever a tabela e seus campos*/

SELECT * FROM products;
/* comando do mysql para selecionar coisas de uma ou mais tabelas */

INSERT INTO products VALUE(1,'Batata',1.00);
/* 1 = id, passando o id*/
INSERT INTO products(name, price) VALUE('Cartela de Ovo',10.00);
/* o  próprio banco coloca o id */
INSERT INTO products(name, price) VALUE('Cacetinho',3.50);
/* inserir dados na tabela */

/*
ALTER TABLE 'products'
ADD COLUNM 'category' VARCHAR(45) NULL AFTER 'price' 

outro jeito:
alter table products add brand varchar(45);
-> criar uma nova coluna    

alter table products  add cor varchar(45) after name;
-> criar coluna depois de nome 

alter table products add categoria varchar(45) first;
-> criar coluna de categoria como primeira coluna da tabela

alter table products rename to compras;
-> mudar a tabela de nome 

alter table compras drop cor; 
-> excluir coluna cor da tabela

drop database lojavirtual;
-> excluir database inteira 
*/

/*
delete from 'nome da tabela' where 'parametro a excluir';
exemplo: delete from products where id = 2;
deletar cadastro da tabela 
*/

ALTER USER 'root'
IDENTIFIED WITH
mysql_native_password BY 'root';

FLUSH PRIVILEGES;