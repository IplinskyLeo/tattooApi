import express from "express";
import cors from "cors";
import routes from "./routes/main_route.js";


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

routes(app);

export default app;

const port = process.env.PORT || 4000;

