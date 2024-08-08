/* eslint-disable no-undef */
import { mongoose }from "mongoose";
import { configDotenv } from "dotenv";

configDotenv({path: "variables.env"});

export async function conectarDB () {
    try {
        await mongoose.connect(process.env.DB_MONGO);
        console.log("Base de datos conectada");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

 