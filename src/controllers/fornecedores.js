import fornecedores from "../models/fornecedores";

import {
  getFornecedoresD,
  selectFornecedoresD,
  insertTatuadorD,
  updateFornecedorD,
  deleteFornecedorD,
} from "../dao/fornecedores";

const createFornecedor = async (req, res) => {
  const { fornecedor, produto, quantidade, valor } = req.body;
  try {
    const fornecedores = await insertTatuadorD(req.body);
    res.status(201).json({ Tatuadores });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

const findAllFornecedores = async (req, res) => {
  try {
    const fornecedores = await getFornecedoresD();
    res.status(200).json(fornecedores);
  } catch (err) {
    res.status(500).json({
      msg: error.msg,
      error: "true",
    });
  }
};

const findFornecedor = async (req, res) => {
  const id = req.params.id;
  try {
    const fornecedores = await selectFornecedoresD(id);
    res.status(200).json({ fornecedores });
  } catch (error) {
    res.status(400).json({
      msg: error.msg,
      error: "true",
    });
  }
};

const updateFornecedor = async (req, res) => {
  const id = req.params.id;
  const { fornecedor, produto, quantidade, valor } = req.body;
  try {
    const fornecedores = await updateFornecedorD(id);
    res.status(200).json({ fornecedores });
  } catch (error) {
    res.status(400).json({
      msg: error.msg,
      error: "true",
    });
  }
};

const deleteFornecedor = async (req, res) => {
  const id = req.params.id;
  try {
    const fornecedores = await deleteFornecedorD(id);
    res.status(200).json({ fornecedores });
  } catch (error) {
    res.status(400).json({
      msg: error.msg,
      error: "true",
    });
  }
};

export default {
  createFornecedor,
  findAllFornecedores,
  findFornecedor,
  updateFornecedor,
  deleteFornecedor,
};
