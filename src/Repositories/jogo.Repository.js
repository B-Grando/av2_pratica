import knex from "knex";
import { knex } from "../database/knex.js";

async getAll() {
    const jogos = await knex('jogos')
        .select("*").returning("*");
    return jogos;
}

async getById() {
    const jogos = await knex('jogos')
        .where({id});
    return jogos;
}

async post() {
    const jogos = await knex('jogos')
        .insert(jogos)
    return jogos;
}

async patch() {
    const jogos = await knex('jogos')
        .where({id})
        .update
    return jogos;
}

async delete() {
    const jogos = await knex('jogos')
        .where({id})
        .del()
    return jogos;
}

export {
    getAll,
    getById,
    post,
    patch,
    delete
}
