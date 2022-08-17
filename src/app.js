import express from "express";
import { fornecedor } from "./routes/fornecedores.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
