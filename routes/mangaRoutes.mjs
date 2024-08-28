import express from "express";
import { MangaController } from "../controllers/mangaController.mjs"
import { myAnimeListController } from "../controllers/myAnimeListController.mjs";
const router = express.Router();

router.post('/', MangaController.createManga);
router.get('/:id', myAnimeListController.getAnimeById)  
router.put('/:id', MangaController.updateManga);
router.get('/top/:parm', myAnimeListController.getAllAnimes);
router.get('/top', myAnimeListController.getAllAnimes);
router.get('/search/:title',myAnimeListController.getMangasTitle);

export default router;
