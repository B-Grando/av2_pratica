import { jogoServices} from "../Service/jogo.Services.js"

async getAll ("/"(req, res)) {
    try {
        const jogos = await jogoServices.getAll();
        res.json(jogos);
    }satch (error) {
    }
}

async getById(req, res) {
    try {
        const jogos = await jogoService.getById();
        res.json(jogos);
    }satch (error) {
    }
}

async post(req, res) {
    try {
        const jogos = await JogoService.create();
        res.json(jogos);
    }satch (error) {
    }
}

async patch(req, res) {
    try {
        const jogos = await JogoService.create();
        res.json(jogos);
    }satch (error) {
    }
}

async delete(req, res) {
    try {
        const jogos = await JogoService.delete();
        res.json(jogos);
    }satch (error) {
    }
}

export{
getAll,
getById,
post,
patch,
delete
}