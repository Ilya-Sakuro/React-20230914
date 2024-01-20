import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ReviewContainer } from '../Review/container';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import style from './style.module.scss';

export const Reviews = ({ reviews }) => {
  const { theme } = useContext(ThemeContext);
  // Доделать отправку отзыва протестить здесь
  return (
    <div className={style.root}>
      <h2 className={classNames(style.subtitle, { [style.subtitleDark]: theme === 'dark' })}>Reviews</h2>
      <ul className={style.list}>
        {reviews?.map((id) => (
          <li key={id} className={classNames(style.item, { [style.itemDark]: theme === 'dark' })}>
            <ReviewContainer reviewIds={id} />
          </li>
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
};
