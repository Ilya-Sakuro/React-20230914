import { Button } from '../Buttons/Button';

export const RestaurantTabs = ({ restaurants, setActiveRestaurantIndex }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Button key={restaurant.id} title={restaurant.name} onClick={() => setActiveRestaurantIndex(index)} />
      ))}
    </div>
  );
};
