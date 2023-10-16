import classNames from 'classnames';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../contexts/ThemeContext';
import { selectReviewById } from '../../redux/entities/review/selectors';
import { selectUserById } from '../../redux/entities/user/selectors';
import style from './style.module.scss';

export const Review = ({ reviewIds }) => {
  const review = useSelector((state) => selectReviewById(state, reviewIds));
  const user = useSelector((state) => selectUserById(state, review.userId));

  const { theme } = useContext(ThemeContext);

  return (
    <li className={classNames(style.item, { [style.itemDark]: theme === 'dark' })}>
      <span className={classNames(style.name, { [style.nameDark]: theme === 'dark' })}>{user.name}:</span>
      <span>{review.text}</span>
    </li>
  );
};
