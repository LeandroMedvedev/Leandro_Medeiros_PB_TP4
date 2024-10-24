import { useLocation } from 'react-router-dom';

function getCurrentRoute() {
  const location = useLocation();
  const pathname = location.pathname;
  const route = pathname.split('/').at(-1);

  return route;
}

export default getCurrentRoute;
