import express from "express"
import { conectarDB } from "./config/db.mjs";
import router from "./routes/routes.mjs";
const app = express();

conectarDB();
app.use(express.json());

app.use('/api', router);

app.listen(3000, () => {
    console.log("El servidor esta funcionando correctamente");
});
