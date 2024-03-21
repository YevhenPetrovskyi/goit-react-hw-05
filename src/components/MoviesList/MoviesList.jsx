import { Link, useLocation } from 'react-router-dom';
import MovieItem from './MovieItem/MovieItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.moviesList}>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <li className={css.movieItem} key={movie.id}>
            <Link
              className={css.movieLink}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              <MovieItem {...movie} />
            </Link>
          </li>
        ))
      ) : (
        <ErrorMessage message="Nothing found, please try reloading the page." />
      )}
    </ul>
  );
};

export default MoviesList;
