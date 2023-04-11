/*
esse código sql é para ser rodado em um banco de dados (mySQL workbench)
*/

use lojavirtual; 
/* usar banco lojavirtual */

CREATE TABLE IF NOT EXISTS products(
    /*criar uma tabela se ela não existir ainda*/
	id BIGINT(11) AUTO_INCREMENT, 
    nome VARCHAR(200),
    price DECIMAL(10,2),
    PRIMARY KEY (id) 
); 

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

-> criar uma nova coluna    
*/

ALTER USER 'root'
IDENTIFIED WITH
mysql_native_password BY 'root';

FLUSH PRIVILEGES;