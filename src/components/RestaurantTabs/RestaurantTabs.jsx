import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Button } from '../Buttons/Button';
import { ThemeButton } from '../ThemeButton/component';
import style from './style.module.scss';

export const RestaurantTabs = ({ restaurants, setActiveRestaurantIndex, activeTab }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={classNames(style.root, {
        [style.rootDark]: theme === 'dark',
      })}
    >
      {restaurants.map((restaurant, index) => (
        <Button
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => setActiveRestaurantIndex(index)}
          viewVariant="buttonAccent"
          isActive={activeTab.id === restaurant.id}
        />
      ))}
      <ThemeButton />
    </nav>
  );
};
