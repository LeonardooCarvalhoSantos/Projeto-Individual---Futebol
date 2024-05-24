create database FutebolSantista;

drop database FutebolSantista;

use FutebolSantista;

create table Usuario (
id int primary key auto_increment,
Nome varchar(50),
Email varchar(50),
Senha varchar(50)
);

create table Quizz (
id int primary key auto_increment,
score int,
fkUsuario int,
foreign key (fkUsuario) references Usuario (id)
);

select * from Quizz;
select * from Usuario;