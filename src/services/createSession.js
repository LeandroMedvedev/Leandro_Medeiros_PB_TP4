import axios from 'axios';

import { ACCESS_TOKEN, API_BASE_URL } from '../constants';

async function createSessionService(validateToken) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/authentication/session/new`,
      {
        request_token: validateToken,
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    return response.data.session_id;
  } catch (error) {
    throw new Error('Erro ao criar session_id' + error.message);
  }
}

export default createSessionService;
