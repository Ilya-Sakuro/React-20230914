import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/selectors';
import { Dish } from './component';

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  return <Dish dish={dish} />;
};
