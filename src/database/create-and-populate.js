import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./src/database/database.db");


// AGENDAMENTO 

const AGENDAMENTO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "AGENDAMENTO" (
  "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
  "DESCRICAO" VARCHAR(100),
  "DATA" DATE,
  "HORARIO" VARCHAR(5),
  "TATUADOR_ID" INTEGER,
  "CLIENTE_ID" INTEGER,
  "PRECO" DECIMAL,
  FOREIGN KEY(TATUADOR_ID) REFERENCES TATUADOR(ID),
  FOREIGN KEY(CLIENTE_ID) REFERENCES CLIENTS(CLIENT_ID)
  )`;

const ADD_AGENDAMENTO_DATA = `
  INSERT INTO AGENDAMENTO (ID, DESCRICAO, DATA, HORARIO, TATUADOR_ID, CLIENTE_ID, PRECO)
  VALUES
      (1, 'Tatuagem Colorida', '17-02-2022', '08:30', '1', '1', '750'),
      (2, 'Tatuagem Old School', '20-02-2022', '13:30', '2', '2', '900')`;

function createTableAgendamento() {
  db.run(AGENDAMENTO_SCHEMA, (error) => {
    if (error) console.log("[ERROR] Não foi possível criar a tabela.");
  });
}

function populateTableAgendamento() {
  db.run(ADD_AGENDAMENTO_DATA, (error) => {
    if (error) console.log("[ERROR] Não foi possível inserir dados na tabela.");
  });
}

db.serialize(() => {
  createTableAgendamento();
  populateTableAgendamento();
});

// TATUADORES

const TATUADOR_SCHEMA = `
CREATE TABLE IF NOT EXISTS "TATUADOR" (
    "TATUADOR_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NAME" varchar(64),
    "CONTACT" varchar(100),
    "AVAILABILITY" varchar(64)
);`;

const ADD_TATUADORES = `
INSERT INTO TATUADOR (tatuador_id, name, contact, availability)
VALUES 
    (1, 'Felipe Moraes', '(16) 99600-7093', 'Manha'),
    (2, 'Lidia Souza', '(21) 94715-4578', 'Tarde'),
    (3, 'Zoe Smith', '(21) 99632-9278', 'Noite');
`

function createTable() {
    db.run(TATUADOR_SCHEMA, (error) => {
        if (error) console.log("Error to create tatuador table.");
    });
}

function populateTable() {
    db.run(ADD_TATUADORES, (error)=> {
       if (error) console.log("Error to populate clients table");
    });
}

db.serialize( () => {
    createTable();
    populateTable();
}

)