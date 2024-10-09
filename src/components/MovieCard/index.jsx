import { Link } from 'react-router-dom';

import styles from './style.module.css';
import { convertDateToBrazilianFormat } from '../../utils';
import { IMAGE_BASE_URL } from '../../constants';

function MovieCard({ movie }) {
  return (
    <li className={styles.container}>
      <img
        className={styles.image}
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <h3 className={styles.subtitle}>{movie.title}</h3>
      <p className={styles.paragraph}>
        Lançamento:{' '}
        <strong>{convertDateToBrazilianFormat(movie.release_date)}</strong>
      </p>
      <p className={styles.paragraph}>
        Média de votos: <strong>{movie.vote_average}</strong>
      </p>
      <Link className={styles.button} to={`/movie-details/${movie.id}`}>
        DETALHES
      </Link>
    </li>
  );
}

export default MovieCard;
