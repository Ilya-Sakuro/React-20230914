import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import style from './style.module.scss';

export const User = ({ user }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={classNames(style.name, { [style.nameDark]: theme === 'dark' })}>{user.name}</div>;
};
