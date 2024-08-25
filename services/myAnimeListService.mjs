import axios from "axios";
import translate from "translate";

const CLIENT_ID = "9ef36b64dafd0997444e567b1d595f81";
translate.engine = "google";

export async function fetchAnimeById(id) {
    try {
        const response  = await axios.get(`https://api.myanimelist.net/v2/manga/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_volumes,num_chapters,authors{first_name,last_name},pictures,background,related_anime,related_manga,recommendations,serialization{name}`, {
            headers:{
                'X-MAL-CLIENT-ID': `${CLIENT_ID}`
            }
        });
        const dataTranslated = response.data;
        dataTranslated.synopsis = await translate(dataTranslated.synopsis, "es");
        return dataTranslated;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getAnimeListRecent(parm = 0){
    try {
        const response = await axios.get("https://api.myanimelist.net/v2/manga/ranking",{
            headers:{
                'X-MAL-CLIENT-ID': `${CLIENT_ID}`
            },
            params:{
                ranking_type: 'manga',
                limit: 50,
                offset: parm
            }
        });
        const responseData = response.data;
        const modifiedData = responseData.data.map(item => ({
            id: item.node.id,
            title: item.node.title,
            main_picture:{
                medium: item.node.main_picture.medium,
                large: item.node.main_picture.large,
            },
            rank: item.ranking.rank,
            paging:{
                previus: responseData.paging.previous ?? null,
                next: responseData.paging.next
            }
        }));
        return modifiedData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}