import { Counter } from '../Counter/Counter';

export const Dish = ({ dish }) => {
  return (
    <li>
      {dish} <Counter />
    </li>
  );
};
