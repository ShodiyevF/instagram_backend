create database instagram_test;

create table users(
    user_id serial primary key,
    user_username varchar(64) not null,
    user_password varchar(64) not null
);