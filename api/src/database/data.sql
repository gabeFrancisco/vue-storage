create database vuestorage;
create table users(
    id serial primary key,
    username varchar(15) not null,
    email varchar(50) not null,
    password text not null,
    created_at timestamp,
    updated_at timestamp
);
create table products(
    id serial primary key,
    name varchar(50) not null,
    category varchar(30) not null,
    quantity int not null,
    price decimal(10, 2) not null,
    created_at timestamp,
    updated_at timestamp,
    user_id int not null,
    foreign key(user_id) references users(id)
);