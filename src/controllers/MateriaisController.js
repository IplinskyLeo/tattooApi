// import {
//   getMaterial,
//   selectMaterials,
//   insertMaterial,
//   updateMaterials,
//   deleteMaterials,
// } from "../models/Materiais.js";

import {
  createMaterialD,
  findAllMaterialsD,
  findMaterialD,
  updateMaterialD,
  deleteMaterialD,
} from "../dao/MateriaisDAO.js";

import MateriaisClass from "../models/Materiais.js";

export const createMaterial = async (req, res) => {
  const { id, fornecedor, produto, quantidade, valor } = req.body;
  try {
    const Material = await createMaterialD(req.body);
    res.status(200).json({ Material });
  } catch (error) {
    res.status(400).json({
      message: error,
      error: "true",
    });
  }
};

export const findAllMaterials = async (req, res) => {
  try {
    const Materials = await findAllMaterialsD();
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
    const Materials = await findMaterialD(id);
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
    const MaterialOld = await findMaterialD(id);
    const MaterialNew = new MateriaisClass(
      id || MaterialOld.id,
      fornecedor || MaterialOld[0].fornecedor,
      produto || MaterialOld[0].produto,
      quantidade || MaterialOld[0].quantidade,
      valor || MaterialOld[0].valor
    );

    const Material = await updateMaterialD(MaterialNew);

    res.status(200).json(Material);
    console.log(Material);
    console.log(req.params.id);
  } catch (error) {
    res.status(400).json({
      error: "Can't update selected Material id",
    });
  }
};

export const deleteMaterialC = async (req, res) => {
  const id = req.params.id;
  try {
    const Materials = await deleteMaterialD(id);
    res.status(200).json(Materials);
  } catch (error) {
    res.status(400).json({
      msg: error.msg,
      error: "true",
    });
  }
};
