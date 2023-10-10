import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import style from './style.module.scss';

export const Review = ({ user, text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <li className={classNames(style.item, { [style.itemDark]: theme === 'dark' })}>
      <span className={classNames(style.name, { [style.nameDark]: theme === 'dark' })}>{user}:</span>{' '}
      <span>{text}</span>
    </li>
  );
};
