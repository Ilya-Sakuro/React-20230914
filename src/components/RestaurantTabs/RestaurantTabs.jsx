import classNames from 'classnames';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Button } from '../Buttons/Button';
import { ThemeButton } from '../ThemeButton/component';
import style from './style.module.scss';

export const RestaurantTabs = ({ restaurantId, setActiveRestaurantId, activeTab }) => {
  const restaurant = useSelector((state) => state.restaurant.entities);
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={classNames(style.root, {
        [style.rootDark]: theme === 'dark',
      })}
    >
      {restaurantId.map((id) => (
        <Button
          key={id}
          title={restaurant[id].name}
          onClick={() => setActiveRestaurantId(id)}
          viewVariant="buttonAccent"
          isActive={activeTab === id}
        />
      ))}
      <ThemeButton />
    </nav>
  );
};
