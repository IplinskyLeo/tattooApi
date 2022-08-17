import {
  createFornecedor,
  findFornecedor,
  findAllFornecedores,
  updateFornecedor,
  deleteFornecedor,
} from "../dao/fornecedores.js";

export default class Fornecedores {
  constructor(db) {
    this.db = db;
  }
}

// -> insert, select, get, update, delete <-

export const insertFornecedor = async (data) => {
  try {
    const dat = await createFornecedor(data);
    if (!dat) throw new Error("Não foi possível inserir os dados!");
    return dat;
  } catch (err) {
    throw err;
  }
};

export const selectFornecedores = async (id) => {
  try {
    const fornecedores = await findAllFornecedores(id);
    if (!fornecedores)
      throw new Error("Não foi possível encontrar os fornecedores!");
    return fornecedores;
  } catch (err) {
    throw err;
  }
};

export const getFornecedores = () => {
  try {
    const fornecedores = findFornecedor();
    if (!fornecedores)
      throw new Error("Não foi possível encontrar os fornecedores!");
    return fornecedores;
  } catch (err) {
    throw err;
  }
};

export const updateFornecedor = async (id) => {
  try {
    const data = await updateFornecedor(id);
    if (!data) throw new Error("Não foi possível atualizar os dados!");
    return data;
  } catch (err) {
    throw err;
  }
};

export const deleteFornecedor = async (id) => {
  try {
    const data = await deleteFornecedor(id);
    if (!data) throw new Error("Não foi possível deletar os dados!");
    return data;
  } catch (err) {
    throw err;
  }
};

//   // Método para inserir um fornecedor no banco de dados
//   async create(fornecedor) {
//     await this.db.run(`
//       INSERT INTO fornecedores (
//         nome,
//         cnpj,
//         telefone,
//         email,
//         endereco,
//         cidade,
//         estado,
//         pais,
//         cep
//       ) VALUES (?,?,?,?,?,?,?,?,?)`,
//       [
//         fornecedor.nome,
//         fornecedor.cnpj,
//         fornecedor.telefone,
//         fornecedor.email,
//         fornecedor.endereco,
//         fornecedor.cidade,
//         fornecedor.estado,
//         fornecedor.pais,
//         fornecedor.cep
//       ]
//     );
//   }
//   // Método para listar todos os fornecedores do banco de dados
//   async findAll() {
//     const fornecedores = await this.db.all(`SELECT * FROM fornecedores`);
//     return fornecedores;
//   }
//   // Método para listar um fornecedor do banco de dados
//   async find(id) {
//     const fornecedor = await this.db.get(`SELECT * FROM fornecedores WHERE id = ?`, [id]);
//     return fornecedor;
//   }
//   // Método para atualizar um fornecedor no banco de dados
//   async update(fornecedor) {
//     await this.db.run(`
//       UPDATE fornecedores SET
//         nome = ?,
//         cnpj = ?,
//         telefone = ?,
//         email = ?,
//         endereco = ?,
//         cidade = ?,
//         estado = ?,
//         pais = ?,
//         cep = ?
//       WHERE id = ?`,
//         [
//             fornecedor.nome,
//             fornecedor.cnpj,
//             fornecedor.telefone,
//             fornecedor.email,
//             fornecedor.endereco,
//             fornecedor.cidade,
//             fornecedor.estado,
//             fornecedor.pais,
//             fornecedor.cep,
//             fornecedor.id
//         ]
//         );
//     }
//     // Método para deletar um fornecedor no banco de dados
//     async delete(id) {
//       await this.db.run(`DELETE FROM fornecedores WHERE id = ?`, [id]);
//     }
//     }
