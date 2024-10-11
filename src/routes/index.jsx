import { Route, Routes } from 'react-router-dom';

import { MovieDetails, MovieList, SignIn, SignUp } from '../components';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' exact element={<MovieList />} />
      <Route path='/movie/:id' element={<MovieDetails />} />
      <Route path='/authentication/signin' element={<SignIn />} />
      <Route path='/authentication/signup' element={<SignUp />} />
    </Routes>
  );
}

export default AppRoutes;
