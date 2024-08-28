import { myAnimeListService } from "../services/myAnimeListService.mjs";

export class myAnimeListController{
  static async getAnimeById (req,res) {
    try {
        const { id } = req.params; 
        if (!id) {
          return res.status(400).json({ message: "ID es requerido" });
        }
        const data = await myAnimeListService.fetchAnimeById(id);
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  }

  static async getAllAnimes(req,res){
    try {
      const { parm } = req.params;
      const data = await myAnimeListService.getAnimeListRecent(parm);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getMangasTitle(req,res){
    try {
      const {title} = req.params;
      const data = await myAnimeListService.getMangaListByTitle(title);
      res.json(data);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  }

}