import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaRegBookmark, FaBookmark } from 'react-icons/fa';

import { convertDateToBrazilianFormat } from '../../utils';
import { useFetchDetailsMovie } from '../../hooks';
import { IMAGE_BASE_URL } from '../../constants';
import { useAuthContext } from '../../contexts';
import styles from './style.module.css';
import {
  checkMovieStatusService,
  toggleFavoriteStatusService,
  toggleWatchlistStatusService,
} from '../../services';

function Details() {
  const { id } = useParams();
  const { sessionId } = useAuthContext();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const { movie, loading, error } = useFetchDetailsMovie(id);

  useEffect(() => {
    if (!sessionId) return;

    const loadMovieStatus = async () => {
      try {
        const data = await checkMovieStatusService(id, sessionId);
        setIsFavorite(data.favorite);
        setIsWatchlisted(data.watchlist);
      } catch (error) {
        console.error(error);
      }
    };

    loadMovieStatus();
  }, [id, sessionId]);

  const handleToggleFavorite = async () => {
    try {
      const success = await toggleFavoriteStatusService(
        id,
        sessionId,
        isFavorite
      );

      if (success) setIsFavorite(!isFavorite);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleWatchlist = async () => {
    try {
      const success = await toggleWatchlistStatusService(
        id,
        sessionId,
        isWatchlisted
      );

      if (success) setIsWatchlisted(!isWatchlisted);
    } catch (error) {
      console.error(error);
    }
  };

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

        {sessionId && (
          <div className={styles.actions}>
            <button
              onClick={handleToggleFavorite}
              className={styles.favoriteButton}
              title='Favorito'
            >
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button
              onClick={handleToggleWatchlist}
              className={styles.watchlistButton}
              title='Lista de Interesses'
            >
              {isWatchlisted ? <FaBookmark /> : <FaRegBookmark />}
            </button>
          </div>
        )}

        <p className={styles.voteAverage}>
          <span className={styles.star}>&#9733;</span>{' '}
          {movie.vote_average.toFixed(1)}
        </p>
        <p className={styles.originalTitle}>
          Título original: {movie.original_title}
        </p>
        <p className={styles.tagline}>{movie.tagline}</p>
        <div className={styles.releaseDateContainer}>
          <span>{convertDateToBrazilianFormat(movie.release_date)} &bull;</span>
          <span>{movie.runtime} min</span>
        </div>

        <p className={styles.overview}>{movie.overview}</p>
      </section>
    </main>
  );
}

export default Details;
