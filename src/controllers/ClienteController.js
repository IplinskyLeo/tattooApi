import  {Clients, getClients, selectData, insertD, updateD, deleteD} from "../models/Cliente.js";

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
  const id = req.params.id;
  try {
    const clients = await selectData(id);
    res.status(200).json({ clients });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

export const updateData = async (req, res) => {
  const id = req.params.id
  const {name, contact, age, city} = req.body
  const newClient = new Clients(name, contact, age, city) 
  try {
      const updated = await updateD(newClient, id)
      res.status(200).send(updated)
  }
  catch(error) {
      res.status(400).json({
          "msg" : error.message,
          "erro" : "true"
      })
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

