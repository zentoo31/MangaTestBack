import express from "express"
import { PORT } from "./config/config.mjs";
import { conectarDB } from "./config/db.mjs";
import router from "./routes/mangaRoutes.mjs";
import userRouter from "./routes/userRoutes.mjs";
import cors  from 'cors'

const app = express();

conectarDB();
app.use(cors());
app.disable('x-powered-by');

app.use(express.json());

app.use('/api/manga', router);
app.use('/api/user', userRouter);

app.listen(PORT, () => {
    console.log(`El servidor esta funcionando correctamente en: http://localhost:${PORT}`);
});
