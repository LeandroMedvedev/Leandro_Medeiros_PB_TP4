import { Link, useLocation } from 'react-router-dom';

import Svg from '../Svg';
import styles from './style.module.css';
import movieTheater from '../../assets/svgs/movie-theater.svg';
import useScrollEffect from '../../hooks/useScrollEffect';

function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const scrolling = useScrollEffect();

  const isSignIn = /\/signin/.test(pathname);

  return (
    <header className={`${styles.container} ${scrolling && styles.scrolled}`}>
      <Link className={styles.brandLink} to={'/'}>
        <p className={styles.brand}>CinePlay</p>
        <Svg className={styles.logo} src={movieTheater} alt='CinePlay logo' />
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            {isSignIn ? (
              <Link className={styles.link} to={'/authentication/signup'}>
                Cadastrar
              </Link>
            ) : (
              <Link className={styles.link} to={'/authentication/signin'}>
                Entrar
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
