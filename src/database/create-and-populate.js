import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./scr/database/database.db");

const createTable = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS 'MATERIAL' (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fornecedor TEXT,
        produto TEXT,
        quantidade TEXT,
        valor INTEGER
        )`
  );
  console.log("Tabela criada com sucesso!");
};

const populateTable = () => {
  db.run(
    `INSERT INTO MATERIAL (fornecedor, produto, quantidade, valor) VALUES (
        "Trixxy",
        "caneta rotativa T3100",
        "5",
        "350"
        )`
  );
  db.run(
    `INSERT INTO MATERIAL (fornecedor, produto, quantidade, valor) VALUES (
        "Master Agulhas",
        "agulha",
        "50",
        "20"
        )`
  );
  db.run(
    `INSERT INTO MATERIAL (fornecedor, produto, quantidade, valor) VALUES (
        "Pro Clean",
        "kit higienizador",
        "10",
        "30"
        )`
  );
  db.run(
    `INSERT INTO MATERIAL (fornecedor, produto, quantidade, valor) VALUES (
        "Max Tintas",
        "tintas variadas",
        "100",
        "14"
        )`
  );
};

db.serialize(() => {
  createTable();
  populateTable();
});
