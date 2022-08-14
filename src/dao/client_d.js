import db from "../data/db.js";

const clientsList = () => {
    const query = "SELECT * FROM CLIENTS;"
    return new Promise((resolve, reject) => {
        db.all(query, (error, rows) => {
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
    const query = "INSERT INTO clients (client_id, name, contact, age, city) VALUES (?,?,?,?,?)"
    [data.CLIENT_ID, data.NAME, data.CONTACT, data.AGE, data.CITY]
    return new Promise((resolve, reject) => {
        db.run(query, (error, rows) => {
            if (error) {
                reject(error)
            } 
            else {
                resolve({
                    "msg": `Data successfully inserted!`,
                    "pedido": rows,
                    "erro": false,
                });
            }
        });
    });
}

const clientSelectById = (id) => {
    const query = `SELECT * FROM CLIENTS WHERE ID = ?;`
    return new Promise((resolve, reject) => {
    db.get(query, id, (error, rows) => {
        if(error) {
            reject(error)
        } else if ((!rows) || rows.length <= 0) {
            reject({
                "message": 'Usuário não encontrado',
                "status": 404,
                "erro": true
            })
        } else {resolve({
            "status": 200,
            "retorno" : {
            "dados" : rows
            }
        })}
    })
})
}

const updateById = (id, data) => {
    const query = "UPDATE clients SET name = ?, contact = ?, age =?, city = ? WHERE id = ?"
    [data.name, data.contact, data.age, data.city, id]
    return new Promise((resolve, reject) => {
        db.run(query, (error, rows) => {
            if (error) {
                reject(error)
            } 
            else {
                resolve(rows)
            }
        });
    });
}

const deleteByCity = (city) => {
    const query = "DELETE FROM clients WHERE city = ?"
    city
    return new Promise((resolve, reject) => {
        db.run(query, (error) => {
            if (error) {
                reject(error)
            } 
            else {
                resolve("Client deleted successfully")
            }
        });
    });
}


export { clientsList, clientSelectById, insertData, updateById, deleteByCity } ;
