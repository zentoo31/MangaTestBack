import axios from "axios";

const CLIENT_ID = "9ef36b64dafd0997444e567b1d595f81";

export async function fetchAnimeById(id) {
    try {
        const response  = await axios.get(`https://api.myanimelist.net/v2/anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`, {
            headers:{
                'X-MAL-CLIENT-ID': `${CLIENT_ID}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        
    }
}