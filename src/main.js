import express from "express";

import { agendamentoRouter } from "./routes/agendamento.js";

const app = express();

app.use(express.json());

app.use(agendamentoRouter);

app.listen(4000, () => {
  console.log("Server running: http://localhost:4000");
});
