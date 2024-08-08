import Manga from "../models/manga.mjs";

export async function crearManga(req,res){
    try {
        let manga;
        manga = new Manga(req.body);
        await manga.save();
        res.send(manga);
        
    } catch (error) {
        console.error(error);
        res.status(300).send('Hubo un error');
    }
}

export async function obtenerManga(req,res){
    try {
        const mangas = await Manga.find();
        res.json(mangas);

    } catch (error) {
        console.error(error);
        res.status(300).send('Hubo un error');
    }
}


