import { Route, Routes } from 'react-router-dom';

import { MovieDetails, Profile, SignIn, SignUp } from '../pages';
import { MovieList } from '../components';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' exact element={<MovieList />} />
      <Route path='/movie/:id' element={<MovieDetails />} />
      <Route path='/auth/signin' element={<SignIn />} />
      <Route path='/auth/signup' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
