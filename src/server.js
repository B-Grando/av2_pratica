import {express} from "express"
import {jogoRoutes} from "../Routers/jogo.Routes.js"

const app = express();

app.use(express.json());
app.use('/jogo', jogoRoutes);

const .env PORT || 3000;

