import css from './MovieItem.module.css';
import imageNotFound from '../../../assets/img/image-not-found.jpg';

const MovieItem = ({ poster_path, title, vote_average }) => {
  const urlImage = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <>
      <img
        src={poster_path ? urlImage : imageNotFound}
        alt={title}
        width="300"
        height="420"
      />
      <div className={css.movieDescription}>
        <h3 className={css.movieTitle}>{title}</h3>
        <p className={css.movieRating}>Rating: {vote_average.toFixed(2)}</p>
        <div>
          <div className={css.starOuter}>
            <div
              className={css.starInner}
              style={{ width: `${(vote_average / 10) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieItem;
