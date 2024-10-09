import styles from './style.module.css';
import useFetchMovies from '../../hooks/useFetchMovies';
import MovieCard from '../MovieCard';

function MovieList() {
  const { movies, loading, error } = useFetchMovies();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.container}>
      <h2 className={styles.subtitle}>Filmes</h2>
      <ul className={styles.list}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </ul>
    </section>
  );
}

export default MovieList;
