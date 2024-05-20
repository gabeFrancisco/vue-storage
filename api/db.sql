create database vuestorage;
create table users(
    id serial,
    username varchar(15) not null,
    email varchar(50) not null,
    password text not null,
    createdAt timestamp,
    updatedAt timestamp
);