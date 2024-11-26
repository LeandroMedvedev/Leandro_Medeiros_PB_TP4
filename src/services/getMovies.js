import axios from 'axios';

import { ACCESS_TOKEN } from '../constants';

async function getMoviesService(url) {
  try {
    const response = await axios.get(url, {
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
