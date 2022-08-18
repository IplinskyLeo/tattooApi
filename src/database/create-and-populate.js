import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./src/database/database.db");

const createTable = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS MATERIAL (
        id INTEGER PRIMARY KEY,
        fornecedor VARCHAR(100),
        produto VARCHAR(100),
        quantidade VARCHAR(100),
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
    `INSERT INTO MATERIAL (id, fornecedor, produto, quantidade, valor) VALUES
    (1, 'Trixxy', 'caneta rotativa T3100','5',350),
    (2, 'Master Agulhas', 'agulha de cobre','10',10),
    (3, 'Pro Cleanings', 'kit higienizador premium','150',30),
    (4, 'MaxWell', 'kit tintas variadas', '50',37)
    `,
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
