import {clientsList, clientSelectById, insertData, updateById, deleteByCity} from "../dao/client_d.js"

class Clients {
    constructor(client_id, name, contact, age, city){
        this.client_id = client_id;
        this.name = name;
        this.contact = contact;
        this.age = age;
        this.city = city;
    }
}

export const getClients = async () => {
    try {
        const data = await clientsList();
        if (!data) throw new Error("Não foi possível encontrar os clientes!")
        return data
    } catch (error) {
        throw error
    }
}

export const selectData = async (id) => {
    try {
        const data = await clientSelectById(id);
        if (!data) throw new Error("Não foi possível encontrar os clientes!")
        return d
    } catch (error) {
        throw error
    }
}

export const insertD = async (data) => {
    try {
        const d = await insertData(data);
        if (!data) throw new Error("Não foi possível inserir os dados!")
        return data
    } catch (error) {
        throw error
    }
}

export const updateD = async (id) => {
    try {
        const data = await updateById(id);
        if (!data) throw new Error("Não foi possível fazer a atualização dos seus dados!")
        return data
    } catch (error) {
        throw error
    }
}

export const deleteD = async (city) => {
    try {
        const data = await deleteByCity(city);
        if (!data) throw new Error("Não foi possível deletar os seus dados!")
        return data
    } catch (error) {
        throw error
    }
}