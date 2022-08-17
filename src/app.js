import express from "express";
import { fornecedor } from "./routes/materialR.js";
import router from "./routes/materialR.js";

const app = express();
app.use(express.json());

// const port = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Running on port: 3000`);
});
