import db from "../database/config.js";

const createFornecedorD = (data) => {
  return new promise((resolve, reject) => {
    db.run(
      `INSERT INTO FORNECEDOR (fornecedor, produto, quantidade, valor) VALUES (?,?,?,?)`,
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

const findAllFornecedoresD = () => {
  return new promise((resolve, reject) => {
    db.all(`SELECT * FROM FORNECEDOR`, (err, rows) => {
      if (err) {
        rej(err);
      } else {
        res(rows);
      }
    });
  });
};

const findFornecedorD = (id) => {
  return new promise((resolve, reject) => {
    db.get(`SELECT * FROM FORNECEDOR WHERE id = ?`, [id], (err, row) => {
      if (err) {
        rej(err);
      } else {
        res(row);
      }
    });
  });
};

const updateFornecedorD = (data) => {
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

const deleteFornecedorD = (id) => {
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

export default {
  createFornecedorD,
  findAllFornecedoresD,
  findFornecedorD,
  updateFornecedorD,
  deleteFornecedorD,
};
