import { fetchAnimeById } from "../services/myAnimeListService.mjs";

export async function getAnimeById (req,res) {
    try {
        const { id } = req.params;  // Accede a 'id' desde req.params
        if (!id) {
          return res.status(400).json({ message: "ID es requerido" });
        }
        const data = await fetchAnimeById(id);
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}