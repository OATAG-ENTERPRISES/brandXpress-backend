create database brandXpress;
create table users(
    id bigserial primary key,
    name varchar(100) not null,
    email varchar(100) unique not null,
    password varchar(100) not null
);