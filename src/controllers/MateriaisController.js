import Fornecedores from '../models/Materiais.js';

import {
  getMaterial,
  selectMaterials,
  insertMaterial,
  updateMaterials,
  deleteMaterials,
} from "../models/Materiais.js";

export const createMaterial = async (req, res) => {
  const data = req.params.data;
  try {
    const Material = await insertMaterial(data);
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
    const Materials = await selectMaterials();
    res.status(200).json({ Materials });
  } catch (error) {
    res.status(500).json({
      msg: error.msg,
      error: "true",
    });
  }
};

export const findMaterial = async (req, res) => {
  const id = req.params.id;
  try {
    const Materials = await getMaterial(id);
    res.status(200).json({ Materials });
  } catch (error) {
    res.status(400).json({
      msg: error.msg,
      error: "true",
    });
  }
};

export const updateMaterialC = async (req, res) => {
  const id = req.params.id;
  try {
    const Materials = await updateMaterials(id);
    res.status(200).json({ Materials });
  } catch (error) {
    res.status(400).json({
      msg: error.msg,
      error: "true",
    });
  }
};

export const deleteMaterialC = async (req, res) => {
  const id = req.params.id;
  try {
    const Materials = await deleteMaterials(id);
    res.status(200).json({ Materials });
  } catch (error) {
    res.status(400).json({
      msg: error.msg,
      error: "true",
    });
  }
};
