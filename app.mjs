import express from "express"
import { conectarDB } from "./config/db.mjs";
import router from "./routes/routes.mjs";
import cors  from 'cors'


const app = express();

conectarDB();
app.use(cors());


app.use(express.json());

app.use('/api', router);

app.listen(3000, () => {
    console.log("El servidor esta funcionando correctamente");
});
