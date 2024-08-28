import express from "express";
import { MangaController } from "../controllers/mangaController.mjs"
import { myAnimeListController } from "../controllers/myAnimeListController.mjs";
const router = express.Router();

router.post('/manga', MangaController.createManga);
router.get('/manga/:id', myAnimeListController.getAnimeById)  
router.put('/manga/:id', MangaController.updateManga);
router.get('/manga/top/:parm', myAnimeListController.getAllAnimes);
router.get('/manga/top', myAnimeListController.getAllAnimes);
router.get('/manga/search/:title',myAnimeListController.getMangasTitle);

export default router;
