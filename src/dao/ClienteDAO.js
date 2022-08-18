import db from "../database/config.js";

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
  


const updateById = (id, newClient) => {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE CLIENTS SET name = ?, contact = ?, age =?, city = ? WHERE client_id = ?`, [newClient.name, newClient.contact, newClient.age, newClient.city, id],
         (error) => {
            if (error) {
                reject(error.message)
            } 
            else {
              resolve("Client updated", newClient)
               
            }
        })
      })
    };

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
