import { useState } from 'react';
import { Button } from '../../components/Buttons/Button';
import { Restarans } from '../../components/Product/Restarans';
import { restaurants } from '../../constants/mock';

export const MainPage = () => {
  const [current, setCurrent] = useState(0);

  const restaurantButtons = restaurants.map((restaurant, index) => (
    <Button title={restaurant.name} onClick={() => setCurrent(index)} />
  ));

  return (
    <div>
      {restaurantButtons}
      <Restarans resName={current} />
    </div>
  );
};
