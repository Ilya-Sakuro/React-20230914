import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Footer } from '../../components/Footer/Footer';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import { RestaurantTabs } from '../../components/RestaurantTabs/RestaurantTabs';

export const MainPage = () => {
  const restaurantIds = useSelector((state) => state.restaurant.ids);
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

  return (
    <>
      <header>
        <RestaurantTabs
          restaurantId={restaurantIds}
          setActiveRestaurantId={setActiveRestaurantId}
          activeTab={activeRestaurantId}
        />
      </header>
      <Restaurant activeRestaurantId={activeRestaurantId} />
      <Footer />
    </>
  );
};
