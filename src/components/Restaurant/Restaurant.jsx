import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import { MenuContainer } from '../Menu/container';
import { NameRestaurant } from '../NameRestaurant/component';
import { ReviewsContainer } from '../Reviews/container';
import style from './style.module.scss';

export const Restaurant = ({ activeRestaurantId }) => {
  const { data } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => {
      return { ...result, data: result?.data?.find(({ id }) => id === activeRestaurantId) };
    },
  });
  const { theme } = useContext(ThemeContext);
  return (
    <main
      style={{ backgroundImage: `url(${data?.img})` }}
      className={classNames(style.root, { [style.rootDark]: theme === 'dark' })}
    >
      <NameRestaurant name={data?.name} />
      <div className={style.warper}>
        <MenuContainer restaurantId={data?.id} />
        <ReviewsContainer restaurantId={data?.id} />
      </div>
    </main>
  );
};
