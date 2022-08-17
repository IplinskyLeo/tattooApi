import express from "express";
import { clientsList, clientSelectById, updateData, deleteData, insertData  } from "../controllers/client_c.js";
const router = express.Router();

router
    .get("/clients", clientsList)
    .get("/clients/:id", clientSelectById)
    .patch("/clients/:id", updateData)
    .delete("/clients/:id", deleteData)
    .post("/clients/", insertData)
    
export default router;   

