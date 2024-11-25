import { AuthProvider } from './AuthContext/AuthContext';
import { MoviesProvider } from './MoviesContext/MoviesContext';

function AppProvider({ children }) {
  return (
    <AuthProvider>
      <MoviesProvider>{children}</MoviesProvider>
    </AuthProvider>
  );
}

export default AppProvider;
