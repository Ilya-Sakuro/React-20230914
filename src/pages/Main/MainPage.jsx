import { useState } from 'react';
import { Button } from '../../components/Buttons/Button';
import { Restaurants } from '../../components/Product/Restaurants';
import { restaurants } from '../../constants/mock';

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Button title={restaurant.name} onClick={() => setActiveRestaurantIndex(index)} />
      ))}
      <Restaurants restaurantsIndex={activeRestaurantIndex} />
    </div>
  );
};
