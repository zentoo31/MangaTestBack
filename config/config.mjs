/* eslint-disable no-undef */
import { configDotenv } from "dotenv";

configDotenv({ path: "variables.env" });

const PORT = process.env.PORT;
const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;
const DB_MONGO = process.env.DB_MONGO;
const SECRET_KEY = process.env.SECRET_KEY;
export { PORT, SALT_ROUNDS, DB_MONGO, SECRET_KEY };
