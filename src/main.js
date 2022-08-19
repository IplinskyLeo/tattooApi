import express from "express";
import tatuador from "./routes/tatuador.js";

const app = express();
app.use(agendamentoRouter);

app.use(express.json(),
cors(corsConfig)
)

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Tattoo API" })
    })

    app.use(
        tatuador
    );
}

routes(app);

const port =  process.env.PORT || 5000;

app.listen(port, () => console.log(`Running in http://localhost:${port}`));