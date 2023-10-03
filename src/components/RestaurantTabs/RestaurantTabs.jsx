import { Button } from '../Buttons/Button';
import style from './style.module.scss';

export const RestaurantTabs = ({ restaurants, activeRestaurantIndex, setActiveRestaurantIndex }) => {
  return (
    <header className={style.root}>
      {restaurants.map((restaurant, index) => (
        <Button
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => setActiveRestaurantIndex(index)}
          index={index}
          activeRestaurantIndex={activeRestaurantIndex}
          positionButtonsTabs={style.button}
        />
      ))}
    </header>
  );
};
