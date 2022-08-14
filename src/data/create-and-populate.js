import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./database.db');

const CLIENTS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTS" (
    "CLIENT_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NAME" varchar(64),
    "CONTACT" varchar(100),
    "AGE" INT,
    "CITY" varchar(64)
);`;

const ADD_CLIENTS_DATA = `
INSERT INTO CLIENTS (CLIENT_ID, NAME, CONTACT, AGE, CITY)
VALUES 
    (1, 'Luiza da Silva Pereira', '(21) 98708-7261', '18', 'Rio de Janeiro'),
    (2, 'Lucas Nascimento de Sousa', '(88) 97431-0987', '25', 'Fortaleza'),
    (3, 'Marcela Goes Lima', '(21) 99723-8701', '40', 'Rio de Janeiro'),
    (4, 'Felipe Oliveira Júnior', '(11) 97653-8221', '33', 'São Paulo'),
    (5, 'João Ribeiro Lima', '(61) 9876-1281', '21', 'Brasília');
`

function createTable() {
    db.run(CLIENTS_SCHEMA, (error) => {
        if (error) console.log("Error to create clients table.");
    });
}

function populateTable() {
    db.run(ADD_CLIENTS_DATA, (error)=> {
       if (error) console.log("Error to populate clients table");
    });
}

db.serialize( () => {
    createTable();
    populateTable();
}

)

