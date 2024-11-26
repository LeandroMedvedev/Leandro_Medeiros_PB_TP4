import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  createSessionService,
  getRequestTokenService,
  validateRequestTokenService,
} from '../../services';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [sessionId, setSessionId] = useState(
    localStorage.getItem('session_id') || null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signIn = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
      const requestToken = await getRequestTokenService();
      const validateToken = await validateRequestTokenService(
        username,
        password,
        requestToken
      );
      const newSessionId = await createSessionService(validateToken);

      localStorage.setItem('session_id', newSessionId);
      setSessionId(newSessionId);

      navigate('/watchlist');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem('session_id');
    setSessionId(null);
    navigate('/signin');
  };

  return (
    <AuthContext.Provider
      value={{ sessionId, signIn, signOut, error, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
