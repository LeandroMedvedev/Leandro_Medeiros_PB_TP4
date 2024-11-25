import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const isAuthenticated = !!localStorage.getItem('session_id');

  return isAuthenticated ? <Outlet /> : <Navigate to='/auth/signin' />;
}

export default PrivateRoute;
