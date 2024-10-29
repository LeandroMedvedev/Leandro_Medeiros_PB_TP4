import { useParams } from 'react-router-dom';

import styles from './style.module.css';
import { useFetchDetailsMovie } from '../../hooks';
import { IMAGE_BASE_URL } from '../../constants';
import { convertDateToBrazilianFormat } from '../../utils';

function Details() {
  const { id } = useParams();
  const { movie, loading, error } = useFetchDetailsMovie(id);
  // console.log(movie);

  if (loading) return <p className='loading'>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className={styles.container}>
      <section className={styles.imgContainer}>
        <img
          className={styles.image}
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
        />
      </section>
      <section className={styles.infoContainer}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p className={styles.voteAverage}>
          <span className={styles.star}>&#9733;</span>{' '}
          {movie.vote_average.toFixed(1)}
        </p>
        <p className={styles.originalTitle}>
          Título original: {movie.original_title}
        </p>
        <p className={styles.tagline}>{movie.tagline}</p>
        <div className={styles.releaseDateContainer}>
          <span>{convertDateToBrazilianFormat(movie.release_date)} &bull;</span>{' '}
          <span>{movie.runtime} min</span>
        </div>

        <p className={styles.overview}>{movie.overview}</p>
      </section>
    </main>
  );
}

export default Details;
