import mangaSchema from "../schemas/mangaSchema.mjs";
export class MangaModel{
    
    static async createManga(input){
        let manga = new mangaSchema(input);
        await manga.save();
        return manga;
    }

    static async getManga(){
        const mangas = await mangaSchema.find();
        return mangas;
    }

    static async updateManga(id, body){
        const mangaUpdated = await mangaSchema.findByIdAndUpdate(id,body,{
            new:true,
            runValidators: true
        });
        return mangaUpdated;
    }
    

}

