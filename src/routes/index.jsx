import { Route, Routes } from 'react-router-dom';

import {
  Favorites,
  Details,
  Profile,
  SignIn,
  SignUp,
  Watchlist,
} from '../pages';
import { MovieList } from '../components';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' exact element={<MovieList />} />
      <Route path='/movie/:id' element={<Details />} />
      <Route path='/auth/signin' element={<SignIn />} />
      <Route path='/auth/signup' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/watchlist' element={<Watchlist />} />
    </Routes>
  );
}

export default AppRoutes;
