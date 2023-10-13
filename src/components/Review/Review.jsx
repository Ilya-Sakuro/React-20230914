import classNames from 'classnames';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../contexts/ThemeContext';
import style from './style.module.scss';

export const Review = ({ userId, text }) => {
  const user = useSelector((state) => state.user.entities[userId]);
  const { theme } = useContext(ThemeContext);

  return (
    <li className={classNames(style.item, { [style.itemDark]: theme === 'dark' })}>
      <span className={classNames(style.name, { [style.nameDark]: theme === 'dark' })}>{user.name}:</span>{' '}
      <span>{text}</span>
    </li>
  );
};
