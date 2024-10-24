import { useLocation } from 'react-router-dom';

function isSignInRoute() {
  const location = useLocation();
  const pathname = location.pathname;
  const regex = /\/signin/;
  const isSignIn = regex.test(pathname);

  return isSignIn;
}

export default isSignInRoute;
