import imageNotFound from '../../../assets/img/image-not-found.jpg';
import css from './MovieCastItem.module.css';

const MovieCastItem = ({ profile_path, name, character }) => {
  const urlImg = `https://image.tmdb.org/t/p/w500/${profile_path}`;

  return (
    <div>
      <img
        className={css.castImg}
        src={profile_path ? urlImg : imageNotFound}
        alt={name}
        width="200"
        height="300"
      />
      <div className={css.castItemThumb}>
        <h3 className={css.castItemTitle}>{name}</h3>
        <p className={css.castItemCharacter}>
          <span className={css.castItemSpan}>Character:</span> {character}
        </p>
      </div>
    </div>
  );
};

export default MovieCastItem;
