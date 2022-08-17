import {
  createMaterial,
  findMaterial,
  findAllMaterials,
  updateMaterial,
  deleteMaterial,
} from "../dao/materialD.js";


class Fornecedores {
  constructor(fornecedor, produto, quantidade, valor) {
    this.produto = produto;
    this.quantidade = quantidade;
    this.valor = valor;
    this.fornecedor = fornecedor;
  }
}

// -> insert, select, get, update, delete <-

export const insertMaterial = async (data) => {
  try {
    const dat = await createMaterial(data);
    if (!dat) throw new Error("Não foi possível inserir os dados!");
    return dat;
  } catch (err) {
    throw err;
  }
};

export const selectMaterials = async (id) => {
  try {
    const data = await findAllMaterials(id);
    if (!data)
      throw new Error("Não foi possível encontrar os Materiais!");
    return data;
  } catch (err) {
    throw err;
  }
};

export const getMaterial = async () => {
  try {
    const data = await findMaterial();
    if (!data)
      throw new Error("Não foi possível encontrar o Material!");
    return data;
  } catch (err) {
    throw err;
  }
};

export const updateMaterial = async (id) => {
  try {
    const data = await updateMaterial (id);
    if (!data) throw new Error("Não foi possível atualizar os Materiais!");
    return data;
  } catch (err) {
    throw err;
  }
};

export const deleteMaterial = async (id) => {
  try {
    const data = await deleteMaterial(id);
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
