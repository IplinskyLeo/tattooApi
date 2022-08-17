// import { fornecedores } from ".../models/fornecedores.js";

import {
  getMaterialD,
  selectMaterialD,
  insertMaterialD,
  updateMaterialD,
  deleteMaterialD,
} from "../models/materialM";

export const createMaterial = async (req, res) => {
  const data = req.params.data;
  try {
    const Material = await insertMaterialD(data);
    res.status(201).json({ Material });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

export const findAllMaterials = async (req, res) => {
  try {
    const Materials = await getMaterialD();
    res.status(200).json({ Materials });
  } catch (err) {
    res.status(500).json({
      msg: error.msg,
      error: "true",
    });
  }
};

export const findMaterial = async (req, res) => {
  const id = req.params.id;
  try {
    const Materials = await selectMaterialD(id);
    res.status(200).json({ Materials });
  } catch (error) {
    res.status(400).json({
      msg: error.msg,
      error: "true",
    });
  }
};

export const updateMaterial = async (req, res) => {
  const id = req.params.id;
  try {
    const Materials = await updateMaterialD(id);
    res.status(200).json({ Materials });
  } catch (error) {
    res.status(400).json({
      msg: error.msg,
      error: "true",
    });
  }
};

export const deleteMaterial = async (req, res) => {
  const id = req.params.id;
  try {
    const Materials = await deleteMaterialD(id);
    res.status(200).json({ Materials });
  } catch (error) {
    res.status(400).json({
      msg: error.msg,
      error: "true",
    });
  }
};

// export default {
//   createFornecedor,
//   findAllFornecedores,
//   findFornecedor,
//   updateFornecedor,
//   deleteFornecedor,
// };
