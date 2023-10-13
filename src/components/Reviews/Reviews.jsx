import classNames from 'classnames';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import style from './style.module.scss';

export const Reviews = ({ reviewsId }) => {
  const review = useSelector((state) => state.review.entities);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={style.root}>
      <h2 className={classNames(style.subtitle, { [style.subtitleDark]: theme === 'dark' })}>Reviews</h2>
      <ul className={style.list}>
        {reviewsId.map((id) => (
          <Review key={id} userId={review[id].userId} text={review[id].text} />
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
};
