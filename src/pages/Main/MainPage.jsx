import { useState } from 'react';
import { Restaurants } from '../../components/Restaurants/Restaurants';
import { RestaurantTab } from '../../components/RestaurantTab/RestaurantTab';
import { restaurants } from '../../constants/mock';

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <div>
      <RestaurantTab restaurants={restaurants} setActiveRestaurantIndex={setActiveRestaurantIndex} />
      <Restaurants restaurants={restaurants} restaurantsIndex={activeRestaurantIndex} />
    </div>
  );
};
