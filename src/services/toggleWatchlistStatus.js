import { ACCOUNT_ID, API, API_KEY } from '../constants';

async function toggleWatchlistStatusService(movieId, sessionId, isWatchlisted) {
  try {
    const response = await API.post(
      `account/${ACCOUNT_ID}/watchlist`,
      {
        media_type: 'movie',
        media_id: movieId,
        watchlist: !isWatchlisted,
      },
      {
        params: { api_key: API_KEY, session_id: sessionId },
      }
    );

    return response.status === 200 || response.status === 201;
  } catch (error) {
    throw new Error('Erro ao alternar lista de interesses:', error);
  }
}

export default toggleWatchlistStatusService;
