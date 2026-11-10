import { jogoRepository} from "../Repositories/jogo.Repository.js"

async getAll() {
    const jogos = await jogoRepository.getAll()
    return jogos
}

async getById() {
    const jogos = await jogoRepository.getById()
    return jogos
}

async post() {
    const jogos = await jogoRepository.create()
    return jogos
}

async patch() {
    const jogos = await jogoRepository.create()
    return jogos
}

async delete() {
    const jogos = await jogoRepository.delete()
    return jogos
}

export const jogoServices = new jogoServices();