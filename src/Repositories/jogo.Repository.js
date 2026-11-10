import knex from "knex";
import { Knex } from "../database/knex.js";

async getAll() {
    const jogos = await knex('jogos')
        .select("*").returning("*");
    return jogos;
}

async getById() {
    const jogos = await knex('jogos')
        .select("*").returning("*");
    return jogos;
}

async post() {
    const jogos = await knex('jogos')
        .select("*").returning("*");
    return jogos;
}

async patch() {
    const jogos = await knex('jogos')
        .select("*").returning("*");
    return jogos;
}

async delete() {
    const jogos = await knex('jogos')
        .select("*").returning("*");
    return jogos;
}

