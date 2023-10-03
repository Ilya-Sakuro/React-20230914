import { useState } from 'react';
import { Restaurants } from '../../components/Restaurants/Restaurants';
import { RestaurantTabs } from '../../components/RestaurantTabs/RestaurantTabs';
import { restaurants } from '../../constants/mock';

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <div>
      <RestaurantTabs restaurants={restaurants} setActiveRestaurantIndex={setActiveRestaurantIndex} />
      <Restaurants restaurants={restaurants} restaurantsIndex={activeRestaurantIndex} />
    </div>
  );
};
