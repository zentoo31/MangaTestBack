import Manga from "../models/manga.mjs";
export async function createManga(req,res){
    try {
        let manga;
        manga = new Manga(req.body);
        await manga.save();
        res.send(manga);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
}

export async function getManga(req,res){
    try {
        const mangas = await Manga.find();
        res.json(mangas);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
}

export async function updateManga(req,res){
    try {
        const {id} = req.params;
        const mangaActualizado = await Manga.findByIdAndUpdate(id, req.body, {
            new:true,
            runValidators: true
        });
        if (!mangaActualizado) {
            return res.status(404).send('El manga no fue encontrado');
        }
        res.json(mangaActualizado);
    } catch (error) {
        console.error(error);
    }
}