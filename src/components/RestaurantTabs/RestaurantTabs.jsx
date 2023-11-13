import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Tab } from '../Tab/component';
import { ThemeButton } from '../ThemeButton/component';
import style from './style.module.scss';

export const RestaurantTabs = ({ restaurantIds, setActiveRestaurantId, activeTab }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={classNames(style.root, {
        [style.rootDark]: theme === 'dark',
      })}
    >
      {restaurantIds.map((id) => (
        <Tab key={id} tabId={id} setActiveRestaurantId={setActiveRestaurantId} activeTab={activeTab} />
      ))}
      <ThemeButton />
    </nav>
  );
};
