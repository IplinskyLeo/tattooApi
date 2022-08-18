import {
  getMaterial,
  selectMaterials,
  insertMaterial,
  updateMaterials,
  deleteMaterials,
} from "../models/Materiais.js";

export const createMaterial = async (req, res) => {
  const { id, fornecedor, produto, quantidade, valor } = req.body;
  try {
    const Material = await insertMaterial(req.body);
    res.status(200).json(Material);
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error: "true"
    });
  }
};

export const findAllMaterials = async (req, res) => {
  try {
    const Materials = await selectMaterials();
    res.status(200).json(Materials);
  } catch (error) {
    res.status(400).json({
      msg: error.msg,
      error: "Can't find Materials",
    });
  }
};

export const findMaterial = async (req, res) => {
  const id = req.params.id;
  try {
    const Materials = await getMaterial(id);
    res.status(200).json(Materials);
  } catch (error) {
    res.status(400).json({
      error: "Can't find selected Material id",
    });
  }
};

export const updateMaterialC = async (req, res) => {
  const id = req.params.id;
  const { fornecedor, produto, quantidade, valor } = req.body;
  try {
    const Materials = await updateMaterials(
      id,
      fornecedor,
      produto,
      quantidade,
      valor
    );
    res.status(200).json(Materials, id);
  } catch (error) {
    res.status(400).json({
      error: "Can't update selected Material id",
    });
  }
};

export const deleteMaterialC = async (req, res) => {
  const id = req.params.id;
  try {
    const Materials = await deleteMaterials(id);
    res.status(200).json(Materials);
  } catch (error) {
    res.status(400).json({
      msg: error.msg,
      error: "true",
    });
  }
};
