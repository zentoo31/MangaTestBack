import axios from "axios";

const CLIENT_ID = "9ef36b64dafd0997444e567b1d595f81";

// export async function fetchAnimeById(id) {
//     try {
//         const response  = await axios.get(`https://api.myanimelist.net/v2/anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`, {
//             headers:{
//                 'X-MAL-CLIENT-ID': `${CLIENT_ID}`
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }

export async function getAnimeListRecent(){
    try {
        const response = await axios.get("https://api.myanimelist.net/v2/manga/ranking",{
            headers:{
                'X-MAL-CLIENT-ID': `${CLIENT_ID}`
            },
            params:{
                ranking_type: 'manga',
                limit: 20
            }
        });
        const responseData = response.data;
        const modifiedData = responseData.data.map(item => ({
            id: item.node.id,
            title: item.node.title,
            medium_picture: item.node.main_picture.medium,
            large_picture: item.node.main_picture.large,
            rank: item.ranking.rank
        }));
        return modifiedData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}