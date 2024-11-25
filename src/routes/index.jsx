import { Route, Routes } from 'react-router-dom';

import { MovieList } from '../components';
import PrivateRoute from './PrivateRoute';
import {
  Favorites,
  Details,
  Profile,
  SignIn,
  SignUp,
  Watchlist,
} from '../pages';

function AppRoutes() {
  const isAuthenticated = localStorage.getItem('session_id');

  return (
    <Routes>
      <Route index element={isAuthenticated ? <Watchlist /> : <MovieList />} />
      <Route path='movie/:id' element={<Details />} />
      <Route path='auth/signin' element={<SignIn />} />
      <Route path='auth/signup' element={<SignUp />} />

      {/* Rotas protegidas */}
      <Route element={<PrivateRoute />}>
        <Route path='profile' element={<Profile />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='watchlist' element={<Watchlist />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
