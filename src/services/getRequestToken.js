import axios from 'axios';

import { ACCESS_TOKEN, API_BASE_URL } from '../constants';

async function getRequestTokenService() {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/authentication/token/new`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    return response.data.request_token;
  } catch (error) {
    console.error('Erro ao solicitar token:', error.message);
    return null;
  }
}

export default getRequestTokenService;
