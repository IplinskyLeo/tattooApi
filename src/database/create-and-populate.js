import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./src/database/database.db");

const createTable = () => {
  `CREATE TABLE IF NOT EXISTS FORNECEDOR (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fornecedor TEXT,
        produto TEXT,
        quantidade TEXT,
        valor INTEGER
        )`;
};

const populateTable = () => {
  `INSERT INTO FORNECEDOR (fornecedor, produto, quantidade, valor) VALUES (
        "Trixxy",
        "caneta rotativa T3100",
        "5",
        "350"
        )`,
    `INSERT INTO FORNECEDOR (fornecedor, produto, quantidade, valor) VALUES (
        "Master Agulhas",
        "agulha",
        "50",
        "20"
        )`,
    `INSERT INTO FORNECEDOR (fornecedor, produto, quantidade, valor) VALUES (
        "Pro Clean",
        "kit higienizador",
        "10",
        "30"
        )`,
    `INSERT INTO FORNECEDOR (fornecedor, produto, quantidade, valor) VALUES (
        "Max Tintas",
        "tintas variadas",
        "100",
        "14"
        )`;
};

db.serialize(() => {
  createTable();
  populateTable();
});
