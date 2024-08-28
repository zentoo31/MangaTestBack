import {MangaModel} from "../models/manga.mjs"

export class MangaController{
    static async createManga(req,res){
        try {
            const body = req.body;
            console.log(body);
            if (!body) {
                return res.status(400).json({message: "Falta cuerpo de solicitud"});
            }
            const data = await MangaModel.createManga(body);
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send('Hubo un error');
        }
    }
    
    static async getManga(req,res){
        try {
            const mangas = await MangaModel.getManga();
            res.json(mangas);
        } catch (error) {
            console.error(error);
            res.status(500).send('Hubo un error');
        }
    }
    
    static async updateManga(req,res){
        try {
            const {id} = req.params;
            const mangaUpdated = await MangaModel.updateManga(id,req.body);
            if (!mangaUpdated) {
                return res.status(404).send('El manga no fue encontrado');
            }
            res.json(mangaUpdated);
        } catch (error) {
            console.error(error);
        }
    }
}

