import { Counter } from '../Counter/Counter';

export const Dish = ({ dish }) => {
  return (
    <>
      {dish.name} <Counter dishId={dish.id} />
    </>
  );
};
