import {
  createMaterialD,
  findAllMaterialsD,
  findMaterialD,
  updateMaterialD,
  deleteMaterialD,
} from "../dao/MateriaisDAO.js";

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
    const dat = await createMaterialD(data);
    if (!dat) throw new Error("Não foi possível inserir os dados!");
    return dat;
  } catch (err) {
    throw err;
  }
};

export const selectMaterials = async (id) => {
  try {
    const data = await findAllMaterialsD(id);
    if (!data) throw new Error("Não foi possível encontrar os Materiais!");
    return data;
  } catch (err) {
    throw err;
  }
};

export const getMaterial = async () => {
  try {
    const data = await findMaterialD();
    if (!data) throw new Error("Não foi possível encontrar o Material!");
    return data;
  } catch (err) {
    throw err;
  }
};

export const updateMaterials = async (id) => {
  try {
    const data = await updateMaterialD(id);
    if (!data) throw new Error("Não foi possível atualizar os Materiais!");
    return data;
  } catch (err) {
    throw err;
  }
};

export const deleteMaterials = async (id) => {
  try {
    const data = await deleteMaterialD(id);
    if (!data) throw new Error("Não foi possível deletar os dados!");
    return data;
  } catch (err) {
    throw err;
  }
};