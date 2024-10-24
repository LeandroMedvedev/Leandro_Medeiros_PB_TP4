import axios from 'axios';

import { ACCESS_TOKEN, API_FAVORITE_MOVIES_URL } from '../constants';

async function getFavoriteMoviesService() {
  try {
    const response = await axios.get(API_FAVORITE_MOVIES_URL, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error('Erro ao buscar filmes: ' + error.message);
  }
}

export default getFavoriteMoviesService;
