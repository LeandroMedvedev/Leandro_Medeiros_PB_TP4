import { Link } from 'react-router-dom';

import styles from './style.module.css';
import { IMAGE_BASE_URL } from '../../constants';

function MovieCard({ movie }) {
  return (
    <li className={styles.container}>
      <Link className={styles.link} to={`/movie/${movie.id}`}>
        <img
          className={styles.image}
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
    </li>
  );
}

export default MovieCard;
