import classNames from 'classnames';
import { Button } from '../Buttons/Button';
import style from './style.module.scss';

export const RestaurantTab = ({ restaurants, activeRestaurantIndex, setActiveRestaurantIndex }) => {
  return (
    <header className={style.root}>
      {restaurants.map((restaurant, index) => (
        <Button
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => setActiveRestaurantIndex(index)}
          className={classNames(style.text, { [style.active]: index === activeRestaurantIndex })}
          activeRestaurantIndex={activeRestaurantIndex}
        />
      ))}
    </header>
  );
};
