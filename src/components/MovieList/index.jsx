import styles from './style.module.css';
import { useFetchMovies } from '../../hooks';
import { MovieCard } from '..';
import { getMoviesService } from '../../services';

function MovieList() {
  const { movies, loading, error } = useFetchMovies(getMoviesService);

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

export default MovieList;
