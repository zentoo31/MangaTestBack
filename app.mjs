import express from "express"
import { conectarDB } from "./config/db.mjs";
import router from "./routes/manga.mjs";
const app = express();

conectarDB();
app.use(express.json());

app.use('/api/mangas', router);

app.listen(3000, () => {
    console.log("El servidor esta funcionando correctamente");
});
