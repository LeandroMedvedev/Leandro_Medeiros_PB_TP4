import axios from 'axios';

import { ACCESS_TOKEN, API_DETAILS_URL } from '../constants';

async function getMovieDetailsService(movieId, sessionId) {
  try {
    const response = await axios.get(
      `${API_DETAILS_URL}/${movieId}?session_id=${sessionId}`,
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

export default getMovieDetailsService;
