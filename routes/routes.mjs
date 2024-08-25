import express from "express";
import { crearManga, obtenerManga } from "../controllers/mangaController.mjs";
import { getAnimeById } from "../controllers/myAnimeListController.mjs";
import { getAllAnimes } from "../controllers/myAnimeListController.mjs";
import { getMangasTitle } from "../controllers/myAnimeListController.mjs";
const router = express.Router();

router.post('/', crearManga);
router.get('/', obtenerManga);
router.get('/manga/:id', getAnimeById);
router.get('/manga/top/:parm', getAllAnimes);
router.get('/manga/top', getAllAnimes);
router.get('/manga/search/:title',getMangasTitle);
export default router;
