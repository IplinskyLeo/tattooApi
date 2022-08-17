import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./database.db");

const createTable = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS MATERIAL (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fornecedor TEXT,
        produto TEXT,
        quantidade TEXT,
        valor INTEGER
        )`,
    (err) => {
      if (err) {
        console.log(err + "Error to create table");
      } else {
        console.log("sucessfully created table");
      }
    }
  );
};

const populateTable = () => {
  db.run(
    `INSERT INTO MATERIAL (fornecedor, produto, quantidade, valor) VALUES (
        "Trixxy",
        "caneta rotativa T3100",
        "5",
        "350"
        )`,
    `INSERT INTO MATERIAL (fornecedor, produto, quantidade, valor) VALUES (
        "Master Agulhas",
        "agulha",
        "50",
        "20"
        )`,
    `INSERT INTO MATERIAL (fornecedor, produto, quantidade, valor) VALUES (
        "Pro Clean",
        "kit higienizador",
        "10",
        "30"
        )`,
    `INSERT INTO MATERIAL (fornecedor, produto, quantidade, valor) VALUES (
        "Max Tintas",
        "tintas variadas",
        "100",
        "14"
        )`,
    (err) => {
      if (err) {
        console.log(err + "Error to populate table");
      } else {
        console.log("sucessfully populated table");
      }
    }
  );
};

db.serialize(() => {
  createTable();
  populateTable();
});
