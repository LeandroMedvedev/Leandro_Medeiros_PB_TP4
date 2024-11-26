import { ACCOUNT_ID, API, API_KEY } from '../constants';

async function toggleFavoriteStatusService(movieId, sessionId, isFavorite) {
  try {
    const response = await API.post(
      `account/${ACCOUNT_ID}/favorite`,
      {
        media_type: 'movie',
        media_id: movieId,
        favorite: !isFavorite,
      },
      {
        params: { api_key: API_KEY, session_id: sessionId },
      }
    );

    return response.status === 200 || response.status === 201;
  } catch (error) {
    throw new Error('Erro ao alternar favorito:', error);
  }
}

export default toggleFavoriteStatusService;
