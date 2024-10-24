import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Svg from '../Svg';
import styles from './style.module.css';
import movieTheater from '../../assets/svgs/movie-theater.svg';
import { useHasRequestToken, useScrollEffect } from '../../hooks';
import { getCurrentRoute, isSignInRoute } from '../../utils';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const scrolling = useScrollEffect();
  const isSignIn = isSignInRoute();
  const route = getCurrentRoute();

  useEffect(() => {
    setIsAuthenticated(useHasRequestToken());
  }, []);

  const authLabel = isSignIn ? (
    <Link className={styles.link} to={'/auth/signup'}>
      Cadastrar
    </Link>
  ) : (
    <Link className={styles.link} to={'/auth/signin'}>
      Entrar
    </Link>
  );

  const headerLabels = isAuthenticated && (
    <>
      {route !== 'profile' && (
        <li>
          <Link className={styles.profileLink} to={'/profile'}>
            Perfil
          </Link>
        </li>
      )}
      {route !== 'interests' && (
        <li>
          <Link className={styles.interestsLink} to={'/interests'}>
            Interesses
          </Link>
        </li>
      )}
      {route !== 'favorites' && (
        <li>
          <Link className={styles.favoritesLink} to={'/favorites'}>
            Favoritos
          </Link>
        </li>
      )}
    </>
  );

  return (
    <header className={`${styles.container} ${scrolling && styles.scrolled}`}>
      <Link className={styles.brandLink} to={'/'}>
        <p className={styles.brand}>CinePlay</p>
        <Svg className={styles.logo} src={movieTheater} alt='CinePlay logo' />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          {!isAuthenticated && authLabel}
          {headerLabels}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
