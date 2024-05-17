create database vuestorage;
create table users(
    id integer primary key,
    username varchar(15) not null,
    email varchar(50) not null,
    password text,
    createdAt timestamp,
    updatedAt timestamp
);