import  {getClients, selectData, insertD, updateD, deleteD} from "../models/client_m.js";

export const clientsList = async (req, res) => {
    try {
         const Clients = await getClients();
         res.status(200).json({Clients})
    } catch (error) {
         res.status(400).json({
             "msg" : error.message,
             "erro" : "true"
         });
    }
 }

 export const clientSelectById = async (req, res) => {
     const id = req.params.id
     try {
          const Clients = await selectData(id);
          res.status(200).json({Clients})
     } catch (error) {
          res.status(400).json({
              "msg" : error.message,
              "erro" : "true"
          });
     }
 }

 export const updateData = async (req, res) => {
     const id = req.params.id
     try {
          const Clients = await updateD(id);
          res.status(200).json({Clients})
     } catch (error) {
          res.status(400).json({
              "msg" : error.message,
              "erro" : "true"
          });
     }
 }

 export const deleteData = async (req, res) => {
     const city = req.params.city
     try {
          const Clients = await deleteD(city);
          res.status(200).json({Clients})
     } catch (error) {
          res.status(400).json({
              "msg" : error.message,
              "erro" : "true"
          });
     }
 }

 export const insertData = async (req, res) => {
     const data = req.params.data
     try {
          const Clients = await insertD(data);
          res.status(200).json({Clients})
     } catch (error) {
          res.status(400).json({
              "msg" : error.message,
              "erro" : "true"
          });
     }
 }