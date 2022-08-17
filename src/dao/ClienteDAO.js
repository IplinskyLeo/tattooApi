import db from "../database/db.js";

const clientsList = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM CLIENTS", (error, rows) => {
            if (error) {
                reject(error)
            } 
            else {
                resolve(rows)
            }
        });
    });
}


const insertData = (data) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO CLIENTS (client_id, name, contact, age, city) VALUES (?,?,?,?,?)`, Object.values(data), (error, rows) => {
            if (error) {
                reject(error)
            } 
            else {
                resolve({
                    "msg": `Data successfully inserted!`,
                    "client": rows,
                    "erro": false,
                });
            }
        });
    });
}

const clientSelectById = (id) => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM CLIENTS WHERE client_id = ?`, [id],  (erro, rows) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(rows);
        }
      });
    });
  };
  


const updateById = (data) => {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE CLIENTS
         SET name = ?, contact = ?, age =?, city = ? WHERE client_id = ?`, [data.name, data.contact, data.age, data.city, data.client_id], (error) => {
            if (error) {
                reject(error.message)
            } 
            else {
                resolve("Client updated successfully!", data)
            }
        });
    });
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM CLIENTS WHERE client_id = ?`, id, (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve("Client removed!");
        }
      });
    });
  };


export { clientsList, clientSelectById, insertData, updateById, deleteById } ;
