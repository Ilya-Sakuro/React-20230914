import { SyncOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dish/selectors';
import { Dish } from './component';

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return (
      <SyncOutlined
        style={{
          fontSize: 24,
          color: '#fa6400',
        }}
        spin
      />
    );
  }

  return <Dish dish={dish} />;
};
