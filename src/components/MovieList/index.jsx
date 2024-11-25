import { useMoviesContext } from '../../contexts';
import styles from './style.module.css';
import { MovieCard } from '..';

function MovieList() {
  const { movies, loading, error } = useMoviesContext();

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
