import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
const API_DETAILS_URL = process.env.REACT_APP_TMDB_API_DETAILS_URL;

async function getMovieByIdService(movieId) {
  try {
    const response = await axios.get(
      `${API_DETAILS_URL}/${movieId}?api_key=${API_KEY}&append_to_response=videos,images&language=pt-BR`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar filme: ' + error.message);
  }
}

export default getMovieByIdService;
