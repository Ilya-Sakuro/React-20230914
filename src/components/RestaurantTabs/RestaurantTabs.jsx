import classNames from 'classnames';
import { useContext } from 'react';
import { RestaurantContext } from '../../contexts/RestaurantContext';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Tab } from '../Tab/component';
import { ThemeButton } from '../ThemeButton/component';
import style from './style.module.scss';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import { LoadingOutlined } from '@ant-design/icons';

//TODO RestaurantTabsContainer

export const RestaurantTabs = () => {
  const { activeRestaurantId, setActiveRestaurantId } = useContext(RestaurantContext);
  const { theme } = useContext(ThemeContext);

  const { data, isFetching } = useGetRestaurantsQuery();

  return (
    <nav
      className={classNames(style.root, {
        [style.rootDark]: theme === 'dark',
      })}
    >
      {isFetching ? (
        <LoadingOutlined style={{ fontSize: 35 }} />
      ) : (
        data.map((restaurant) => (
          <Tab
            key={restaurant.id}
            tab={restaurant}
            setActiveRestaurantId={setActiveRestaurantId}
            activeTab={activeRestaurantId}
          />
        ))
      )}

      <ThemeButton />
    </nav>
  );
};
