import db from "../database/config.js";

const createMaterialD = (data) => {
  return new promise((resolve, reject) => {
    db.run(
      `INSERT INTO MATERIAL (fornecedor, produto, quantidade, valor) VALUES (?,?,?,?)`,
      [data.fornecedor, data.produto, data.quantidade, data.valor],
      (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });
};
// Material // MATERIAL
// const findAllMaterialsD = () => {
//   const query = `SELECT * FROM MATERIAL`;
//   return new Promise((resolve, reject) => {
//     db.all(query, (error, rows) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(rows);
//       }
//     });
//   });
// };
const findAllMaterialsD = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM MATERIAL", (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const findMaterialD = (id) => {
  return new promise((resolve, reject) => {
    db.all(`SELECT * FROM MATERIAL WHERE id = ?`, id, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const updateMaterialD = (id, data) => {
  return new promise((resolve, reject) => {
    db.run(
      `UPDATE MATERIAL SET
            fornecedor = ?,
            produto = ?,
            quantidade = ?,
            valor = ?
            WHERE id = ?`,
      [data.fornecedor, data.produto, data.quantidade, data.valor, id],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
};

const deleteMaterialD = (id) => {
  return new promise((resolve, reject) => {
    db.run(`DELETE FROM MATERIAL WHERE id = ?`, id, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Material deletado com sucesso!");
      }
    });
  });
};

export {
  createMaterialD,
  findAllMaterialsD,
  findMaterialD,
  updateMaterialD,
  deleteMaterialD,
};
