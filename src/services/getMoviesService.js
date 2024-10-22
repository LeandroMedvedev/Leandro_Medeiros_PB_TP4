import axios from 'axios';

const API_URL = process.env.REACT_APP_TMDB_API_URL;
const ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

async function getMoviesService() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error('Erro ao buscar filmes: ' + error.message);
  }
}

export default getMoviesService;
