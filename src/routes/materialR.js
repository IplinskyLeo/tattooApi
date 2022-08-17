import { Router } from "express";
import {
  createFornecedor,
  findAllFornecedores,
  findFornecedor,
  updateFornecedor,
  deleteFornecedor,
} from "../controllers/materialC.js";

const router = Router();

router.get("/Material", findAllFornecedores);
router.get("/Material/:id", findFornecedor);
router.post("/Material", createFornecedor);
router.put("/Material/:id", updateFornecedor);
router.delete("/Material/:id", deleteFornecedor);

export default router;
