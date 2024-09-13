import express from "express"
import { PORT, SECRET_KEY } from "./config/config.mjs";
import { conectarDB } from "./config/db.mjs";
import router from "./routes/mangaRoutes.mjs";
import userRouter from "./routes/userRoutes.mjs";
import tokenRouter from "./routes/tokenRoutes.mjs";
import userInfoRouter from "./routes/userInfoRoutes.mjs";
import cors  from 'cors'
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();
conectarDB();
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true}));
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
    const token = req.cookies.access_token;
    req.user = null; 
    if (token) {
        try {
            const data = jwt.verify(token, SECRET_KEY);
            req.user = {_id: data.id};  
        } catch (error) {
            console.error('Token verification failed:', error);
        }
    }
    next();
});
app.disable('x-powered-by');


app.use('/api/manga', router);
app.use('/api/user', userRouter);
app.use('/api/token', tokenRouter );
app.use('/api/user-info', userInfoRouter);

app.listen(PORT, () => {
    console.log(`El servidor esta funcionando correctamente en: http://localhost:${PORT}`);
});
