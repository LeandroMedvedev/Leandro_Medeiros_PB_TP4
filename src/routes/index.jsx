import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MovieList } from '../components';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<MovieList />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
