import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import style from './style.module.scss';

export const Reviews = ({ reviews }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={style.root}>
      <h2 className={classNames(style.subtitle, { [style.subtitleDark]: theme === 'dark' })}>Reviews</h2>
      <ul className={style.list}>
        {reviews.map(({ id, user, text }) => (
          <Review key={id} user={user} text={text} />
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
};
