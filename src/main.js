import express from "express";
import cors from "cors";
import clients from "./routes/cliente.js";


const corsConfig = {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
}

const app = express();

app.use(express.json(),
cors(corsConfig)
)

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Tattoo API" })
    })

    app.use(
        clients
    );
}

routes(app);

const port =  process.env.PORT || 5000;

app.listen(port, () => console.log(`Running in http://localhost:${port}`));