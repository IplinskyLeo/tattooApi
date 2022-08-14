import clients from "./client_r.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Tattoo API" })
    })

    app.use(
        clients
    );
}

export default routes;