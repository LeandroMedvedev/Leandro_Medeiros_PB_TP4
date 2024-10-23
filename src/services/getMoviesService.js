import axios from 'axios';

import { ACCESS_TOKEN, API_URL } from '../constants';
async function getMoviesService() {
  try {
    const response = await axios.get(API_URL, {
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

export default getMoviesService;
