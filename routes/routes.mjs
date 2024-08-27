import express from "express";
import { createManga } from "../controllers/mangaController.mjs";
import { getAnimeById } from "../controllers/myAnimeListController.mjs";
import { getAllAnimes } from "../controllers/myAnimeListController.mjs";
import { getMangasTitle } from "../controllers/myAnimeListController.mjs";
import { updateManga } from "../controllers/mangaController.mjs";
const router = express.Router();

router.post('/manga', createManga);
router.get('/manga/:id', getAnimeById);
router.put('/manga/:id', updateManga);
router.get('/manga/top/:parm', getAllAnimes);
router.get('/manga/top', getAllAnimes);
router.get('/manga/search/:title',getMangasTitle);
export default router;
