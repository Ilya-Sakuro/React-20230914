import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Button } from '../Buttons/Button';
import { ThemeButton } from '../ThemeButton/component';
import style from './style.module.scss';

export const RestaurantTabs = ({ restaurants, setActiveRestaurantIndex, activeTub }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={classNames({
        [style.root]: theme === 'default',
        [style.rootDark]: theme === 'dark',
      })}
    >
      {restaurants.map((restaurant, index) => (
        <Button
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => setActiveRestaurantIndex(index)}
          index={index}
          positionButtonsTabs={style.button}
          active={activeTub.id === restaurant.id ? style.active : ''}
        />
      ))}
      <ThemeButton />
    </nav>
  );
};
