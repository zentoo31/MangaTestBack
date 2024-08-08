import express from "express";
import { crearManga, obtenerManga } from "../controllers/mangaController.mjs";

const router = express.Router();

router.post('/', crearManga);
router.get('/', obtenerManga);

export default router;
