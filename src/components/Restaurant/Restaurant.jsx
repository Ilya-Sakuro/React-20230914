import classNames from 'classnames';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../contexts/ThemeContext';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';
import { Menu } from '../Menu/Menu';
import { NameRestaurant } from '../NameRestaurant/component';
import { Reviews } from '../Reviews/Reviews';
import style from './style.module.scss';

export const Restaurant = ({ activeRestaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, activeRestaurantId));
  const { theme } = useContext(ThemeContext);

  return (
    <main className={classNames(style.root, { [style.rootDark]: theme === 'dark' })}>
      <NameRestaurant name={restaurant.name} />
      <div className={style.warper}>
        <Menu menuIds={restaurant.menu} />
        <Reviews reviewsIds={restaurant.reviews} />
      </div>
    </main>
  );
};
