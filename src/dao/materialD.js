import db from "../database/config.js";

const createFornecedorD = (data) => {
  return new promise((resolve, reject) => {
    db.run(
      `INSERT INTO MATERIAL (fornecedor, produto, quantidade, valor) VALUES (?,?,?,?)`,
      [data.fornecedor, data.produto, data.quantidade, data.valor],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};
// Material // MATERIAL
const findAllMaterialsD = () => {
  return new promise((resolve, reject) => {
    db.all(`SELECT * FROM MATERIAL`, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const findMaterialD = (id) => {
  return new promise((resolve, reject) => {
    db.get(`SELECT * FROM FORNECEDOR WHERE id = ?`, [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const updateMaterialD = (data) => {
  return new promise((resolve, reject) => {
    db.run(
      `UPDATE FORNECEDOR SET
            fornecedor = ?,
            produto = ?,
            quantidade = ?,
            valor = ?
        WHERE id = ?`,
      [data.fornecedor, data.produto, data.quantidade, data.valor, data.id],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

const deleteMaterialD = (id) => {
  return new promise((resolve, reject) => {
    db.run(`DELETE FROM FORNECEDOR WHERE id = ?`, [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export{
  createFornecedorD,
  findAllFornecedoresD,
  findFornecedorD,
  updateFornecedorD,
  deleteFornecedorD,
};
