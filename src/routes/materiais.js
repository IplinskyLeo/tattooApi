import { Router } from "express";
import {
  createMaterial,
  findAllMaterials,
  findMaterial,
  updateMaterialC,
  deleteMaterialC,
} from "../controllers/MateriaisController.js";

const router = Router();

router.get("/Material", createMaterial);
router.get("/Material/:id", findAllMaterials);
router.post("/Material", findMaterial);
router.put("/Material/:id", updateMaterialC);
router.delete("/Material/:id", deleteMaterialC);

export default router;
