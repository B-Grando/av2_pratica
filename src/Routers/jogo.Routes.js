import {jogoControllers} from "../Controller/jogo.Controllers.js"

jogoRoutes.get("/", jogoControllers.getAll);

jogoRoutes.get("/", jogoControllers.getById);

jogoRoutes.post("/", jogoControllers.post);

jogoRoutes.patch("/", jogoControllers.patch);

jogoRoutes.delete("/", jogoControllers.delete);