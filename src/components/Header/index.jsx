import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { getCurrentRoute, isSignInRoute } from '../../utils';
import { MOVIE_CATEGORIES } from '../../constants';
import { useMoviesContext } from '../../contexts';
import { useScrollEffect } from '../../hooks';
import { movieTheater } from '../../assets';
import styles from './style.module.css';
import Svg from '../Svg';

function Header() {
  const { url, setUrl } = useMoviesContext();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const scrolling = useScrollEffect();
  const isSignIn = isSignInRoute();
  const route = getCurrentRoute();
  const isHomePage = !route;

  useEffect(() => {
    const isAuth = !!localStorage.getItem('session_id');
    if (isAuth) setIsAuthenticated(isAuth);
  }, [route]);

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
      {route !== 'watchlist' && (
        <li>
          <Link className={styles.interestsLink} to={'/watchlist'}>
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

      {isHomePage && (
        <FormControl variant='standard'>
          <InputLabel
            sx={{
              fontFamily: 'Ubuntu',
              color: '#fff',
              '&.Mui-focused': { color: '#fff' },
            }}
          >
            Categorias
          </InputLabel>
          <Select
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            displayEmpty
            sx={{
              fontFamily: 'Ubuntu',
              fontSize: '0.8rem',
              color: '#fff',
            }}
          >
            {MOVIE_CATEGORIES &&
              MOVIE_CATEGORIES.map((item, index) => (
                <MenuItem
                  key={index}
                  value={item.url}
                  sx={{
                    fontFamily: 'Ubuntu',
                  }}
                >
                  {item.category}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      )}

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
