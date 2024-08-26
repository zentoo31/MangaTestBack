/* eslint-disable no-undef */
import express from "express"
import { conectarDB } from "./config/db.mjs";
import router from "./routes/routes.mjs";
import { configDotenv } from "dotenv";
import cors  from 'cors'

configDotenv({path: "variables.env"});

const app = express();
const port = process.env.PORT ?? 3000;

conectarDB();
app.use(cors());
app.disable('x-powered-by');

app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando correctamente en: http://localhost:${port}`);
});
