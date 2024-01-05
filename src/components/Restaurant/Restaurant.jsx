import classNames from 'classnames';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../contexts/ThemeContext';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';
import { MenuContainer } from '../Menu/container';
import { NameRestaurant } from '../NameRestaurant/component';
import { ReviewsContainer } from '../Reviews/container';
import style from './style.module.scss';

export const Restaurant = ({ activeRestaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, activeRestaurantId));
  const { theme } = useContext(ThemeContext);

  return (
    <main
      style={{ backgroundImage: `url(${restaurant.img})` }}
      className={classNames(style.root, { [style.rootDark]: theme === 'dark' })}
    >
      <NameRestaurant name={restaurant.name} />
      <div className={style.warper}>
        <MenuContainer restaurantId={restaurant.id} menuId={restaurant.menu} />
        <ReviewsContainer restaurantId={restaurant.id} />
      </div>
    </main>
  );
};
