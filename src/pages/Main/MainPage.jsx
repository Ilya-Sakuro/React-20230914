import { useContext } from 'react';
import { Layout } from '../../components/Layout/component';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import { RestaurantContext } from '../../contexts/RestaurantContext';
import style from './style.module.scss';

export const MainPage = () => {
  const { activeRestaurantId } = useContext(RestaurantContext);

  return (
    <Layout>
      {activeRestaurantId === null ? (
        <div className={style.row}> </div>
      ) : (
        <Restaurant activeRestaurantId={activeRestaurantId} />
      )}
    </Layout>
  );
};
