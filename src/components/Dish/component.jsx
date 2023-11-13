import classNames from 'classnames';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../contexts/ThemeContext';
import { selectDishById } from '../../redux/entities/dish/selectors';
import { Counter } from '../Counter/Counter';
import style from './style.module.scss';

export const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const { theme } = useContext(ThemeContext);

  return (
    <li className={classNames(style.item, { [style.itemDark]: theme === 'dark' })}>
      {dish.name} <Counter />
    </li>
  );
};
