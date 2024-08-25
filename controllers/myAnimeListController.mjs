import { fetchAnimeById } from "../services/myAnimeListService.mjs";
import {getAnimeListRecent} from "../services/myAnimeListService.mjs";

export async function getAnimeById (req,res) {
    try {
        const { id } = req.params; 
        if (!id) {
          return res.status(400).json({ message: "ID es requerido" });
        }
        const data = await fetchAnimeById(id);
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

export async function getAllAnimes(req,res){
  try {
    const { parm } = req.params;
    const data = await getAnimeListRecent(parm);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

