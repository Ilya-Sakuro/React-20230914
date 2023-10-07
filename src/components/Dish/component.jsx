import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Counter } from '../Counter/Counter';
import style from './style.module.scss';

export const Dish = ({ dish }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <li className={classNames(style.item, { [style.itemDark]: theme === 'dark' })}>
      {dish} <Counter />
    </li>
  );
};
