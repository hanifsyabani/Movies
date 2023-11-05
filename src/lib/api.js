import axios from "axios";


const apiKey ='cd4a24f17244723e1d7f828f7fc628ea';
const baseUrl='https://api.themoviedb.org/3';
export const imageUrl = 'https://image.tmdb.org/t/p/original';

const apiAxios = axios.create({
  baseURL: baseUrl,
  params:{
    api_key : apiKey,
  }


})


export default apiAxios;
