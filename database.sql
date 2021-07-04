CREATE DATABASE users;

CREATE TABLE user_table (
    UserID Serial primary key,
    Name VARCHAR(255),
    Lastname VARCHAR(255),
    Age INTEGER,
    Birthdate VARCHAR(10)
);