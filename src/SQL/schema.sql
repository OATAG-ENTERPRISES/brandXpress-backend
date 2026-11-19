create database brandXpress;
create table users(
    id bigserial primary key,
    name varchar(100) not null,
    email varchar(100) unique not null,
    short_bio text not null,
    password varchar(100) not null,
    follows bigint unique references businesses(id)
);
create table businesses(
    id bigserial primary key,
    bus_name varchar(100) unique not null,
    bus_story text not null,
    bus_mail varchar(100) unique not null,
    bus_phone varchar(11),
    admin bigint not null unique references users(id),
    editor bigint unique references users(id),
    moderator bigint unique references users(id),
    analyst bigint unique references users(id),
    follows bigint unique references users(id)
)