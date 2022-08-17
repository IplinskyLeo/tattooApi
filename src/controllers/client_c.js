import  {Clients, getClients, selectData, insertD, updateD, deleteD} from "../models/client_m.js";

export const clientsList = async (req, res) => {
    try {
         const Clients = await getClients();
         res.status(200).json(Clients)
    } catch (error) {
         res.status(400).json({
             "msg" : error.message,
             "erro" : "true"
         });
    }
 }

 export const clientSelectById = async (req, res) => {
 const { name, contact, age, city } = req.body;
    const { id } = req.params;

    const oldClient = await selectData(id);
    const dataMolded = new Clients(
      name || oldClient[0].NAME,
      contact || oldClient[0].CONTACT,
      age || oldClient[0].AGE,
      city || oldClient[0].CITY,
      id
    );

    try {
      const data = await putUserByID(dataMolded);
      res.status(201).json({ results: data, error: false });
    } catch (erro) {
      res.status(400).json({ message: erro.message, error: true });
    }};


 export const updateData = async (req, res) => {
     const id = req.params.id
     const { name , contact, age, city} = req.body
     const dataC = new Clients( name, contact, age, city)
     try{
          const upData = await updateD(dataC, id);
          res.status(200).json(upData)
     } catch (error) {
          res.status(400).json({
              "msg" : error.message,
              "erro" : "true"
          });
     }
 }

 export const deleteData = async (req, res) => {
     try {
          const del = await deleteD(req.params.id);
          res.status(200).json({del})
     } catch (error) {
          res.status(400).json({
              "msg" : error.message,
              "erro" : "true"
          })
     }
 }

export const insertData = async (req, res) => {
     const { client_id, name, contact, age, city } = req.body;
   
     try {
       const newData = await insertD(req.body);
       res.status(201).json({ newData });
     } catch (error) {
       res.status(400).json({
         message: error.message,
         erro: "true",
       });
     }
   };

