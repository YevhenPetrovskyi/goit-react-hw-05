import { format } from 'date-fns';
import css from './MovieReviewsItem.module.css';

const MovieReviewsItem = ({
  dataReviews: {
    author,
    author_details: { username },
    content,
    created_at,
  },
}) => {
  const formatDate = (date) => {
    return format(new Date(date), 'MMMM dd yyyy HH:mm:ss');
  };
  return (
    <>
      <h2 className={css.reviewItemTitle}>{author}</h2>
      <p className={css.reviewItemUserName}>
        <span className={css.reviewItemSpan}>Username</span>: {username}
      </p>
      <p className={css.reviewItemDate}>{formatDate(created_at)}</p>
      <p className={css.reviewItemContent}>{content}</p>
    </>
  );
};

export default MovieReviewsItem;
