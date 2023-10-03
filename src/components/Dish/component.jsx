import { Counter } from '../Counter/Counter';
import style from './style.module.scss';

export const Dish = ({ dish }) => {
  return (
    <li className={style.item}>
      {dish} <Counter />
    </li>
  );
};
