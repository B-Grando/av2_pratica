import {jogoControllers} from "../Controller/jogo.Controllers.js"

jogoRoutes.getAll("/", jogoControllers.getAll);

jogoRoutes.getById("/", jogoControllers.getById);

jogoRoutes.post("/", jogoControllers.post);

jogoRoutes.patch("/", jogoControllers.patch);

jogoRoutes.delete("/", jogoControllers.delete);

export{
getAll,
getById,
post,
patch,
delete
}