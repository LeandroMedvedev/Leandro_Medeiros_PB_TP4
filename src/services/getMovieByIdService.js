import axios from 'axios';

import { ACCESS_TOKEN, API_DETAILS_URL, API_KEY } from '../constants';

async function getMovieByIdService(movieId) {
  try {
    const response = await axios.get(
      `${API_DETAILS_URL}/${movieId}?api_key=${API_KEY}&append_to_response=videos,images&language=pt-BR`,
      {
        headers: {
          Accept: 'application/json',
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
