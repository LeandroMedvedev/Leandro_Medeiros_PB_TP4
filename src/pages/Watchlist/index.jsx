import { useCallback } from 'react';

import styles from './style.module.css';
import { useFetchMovies } from '../../hooks';
import { MovieCard } from '../../components';
import { getMoviesService } from '../../services';
import { API_WATCHLIST_URL } from '../../constants';

function Watchlist() {
  const fetchMovies = useCallback(
    () => getMoviesService(API_WATCHLIST_URL),
    [API_WATCHLIST_URL]
  );
  const { movies, loading, error } = useFetchMovies(fetchMovies);

  if (loading) return <p className='loading'>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </ul>
    </section>
  );
}

export default Watchlist;
