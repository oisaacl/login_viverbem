create database viver_bem_mais;

use viver_bem_mais;

create table pagina_login(
id_usuario int auto_increment primary key,
cpf varchar(14) not null,
senha varchar(8) not null
);


