import classNames from 'classnames';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { RestaurantContext } from '../../contexts/RestaurantContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';
import { Tab } from '../Tab/component';
import { ThemeButton } from '../ThemeButton/component';
import style from './style.module.scss';

export const RestaurantTabs = () => {
  const restaurantIds = useSelector((state) => selectRestaurantIds(state));
  const { activeRestaurantId, setActiveRestaurantId } = useContext(RestaurantContext);
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={classNames(style.root, {
        [style.rootDark]: theme === 'dark',
      })}
    >
      {restaurantIds.map((id) => (
        <Tab
          key={id}
          tabId={id}
          setActiveRestaurantId={setActiveRestaurantId}
          activeTab={activeRestaurantId}
        />
      ))}
      <ThemeButton />
    </nav>
  );
};
