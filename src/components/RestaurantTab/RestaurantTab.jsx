import { Button } from '../Buttons/Button';

export const RestaurantTab = ({ restaurants, setActiveRestaurantIndex }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Button key={restaurant.id} title={restaurant.name} onClick={() => setActiveRestaurantIndex(index)} />
      ))}
    </div>
  );
};
