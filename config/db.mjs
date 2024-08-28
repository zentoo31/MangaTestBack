import { mongoose }from "mongoose";
import { DB_MONGO } from "./config.mjs";

export async function conectarDB () {
    try {
        await mongoose.connect(DB_MONGO);
        console.log("Base de datos conectada");
    } catch (error) {
        console.error(error);
    }
}
