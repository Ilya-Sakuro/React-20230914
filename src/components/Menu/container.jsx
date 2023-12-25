import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getDishesByRestaurantIfNotExist } from '../../redux/entities/dish/thunks/get-dish';
import { selectRestaurantMenuById } from '../../redux/entities/restaurant/selectors';
import { Menu } from './Menu';

export const MenuContainer = ({ restaurantId }) => {
  const restaurantMenu = useSelector((state) => selectRestaurantMenuById(state, restaurantId));
  const despatch = useDispatch();

  useEffect(() => {
    despatch(getDishesByRestaurantIfNotExist(restaurantId));
  }, [restaurantId]);

  return <Menu menu={restaurantMenu} />;
};
