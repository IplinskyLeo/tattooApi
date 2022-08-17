import db from "../database/dbconfig.js";

const createFornecedor = (data) => {
  return new promise((res, rej) => {
    db.run(
      `INSERT INTO fornecedores (fornecedor, produto, quantidade, valor) VALUES (?,?,?,?)`,
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

const findAllFornecedores = () => {
  return new promise((res, rej) => {
    db.all(`SELECT * FROM fornecedores`, (err, rows) => {
      if (err) {
        rej(err);
      } else {
        res(rows);
      }
    });
  });
};

const findFornecedor = (id) => {
  return new promise((res, rej) => {
    db.get(`SELECT * FROM fornecedores WHERE id = ?`, [id], (err, row) => {
      if (err) {
        rej(err);
      } else {
        res(row);
      }
    });
  });
};

const updateFornecedor = (data) => {
  return new promise((res, rej) => {
    db.run(
      `UPDATE fornecedores SET
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

const deleteFornecedor = (id) => {
  return new promise((res, rej) => {
    db.run(`DELETE FROM fornecedores WHERE id = ?`, [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export default {
  createFornecedor,
  findAllFornecedores,
  findFornecedor,
  updateFornecedor,
  deleteFornecedor,
};
