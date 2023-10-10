import { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import { RestaurantTabs } from '../../components/RestaurantTabs/RestaurantTabs';
import { restaurants } from '../../constants/mock';

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <>
      <header>
        <RestaurantTabs
          restaurants={restaurants}
          setActiveRestaurantIndex={setActiveRestaurantIndex}
          activeTub={restaurants[activeRestaurantIndex]}
        />
      </header>
      <Restaurant restaurants={restaurants[activeRestaurantIndex]} />
      <Footer />
    </>
  );
};
