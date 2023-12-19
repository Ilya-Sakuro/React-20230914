import { useContext } from 'react';
import { Layout } from '../../components/Layout/component';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import { RestaurantContext } from '../../contexts/RestaurantContext';

export const MainPage = () => {
  const { activeRestaurantId } = useContext(RestaurantContext);

  return <Layout>{activeRestaurantId && <Restaurant activeRestaurantId={activeRestaurantId} />}</Layout>;
};
