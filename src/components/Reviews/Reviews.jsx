import classNames from 'classnames';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import style from './style.module.scss';

export const Reviews = ({ restaurants, reviewsIndex, theme }) => {
  return (
    <div className={style.root}>
      <h2 className={classNames(style.subtitle, { [style.subtitleDark]: theme === 'dark' })}>Reviews</h2>
      <ul className={style.list}>
        {restaurants[reviewsIndex].reviews.map(({ id, user, text }) => (
          <Review key={id} user={user} text={text} />
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
};
