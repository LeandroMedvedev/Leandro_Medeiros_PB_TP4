import { API, API_KEY } from '../constants';

async function checkMovieStatusService(movieId, sessionId) {
  try {
    const response = await API.get(`movie/${movieId}/account_states`, {
      params: {
        api_key: API_KEY,
        session_id: sessionId,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Erro ao verificar estado do filme:', error);
  }
}

export default checkMovieStatusService;
