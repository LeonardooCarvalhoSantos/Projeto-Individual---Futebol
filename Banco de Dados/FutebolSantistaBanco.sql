create database FutebolSantista;

use FutebolSantista;

create table Usuario (
idUsuario int primary key auto_increment,
Nome varchar(50),
Email varchar(50),
Senha varchar(50)
);

select * from Usuario;