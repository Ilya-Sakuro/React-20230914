import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';

export const Restaurants = ({ restaurants, restaurantsIndex }) => {
  return (
    <>
      <h1>{restaurants[restaurantsIndex].name}</h1>
      <ul>
        <Menu restaurants={restaurants} menuIndex={restaurantsIndex} />
      </ul>
      <ul>
        <Reviews restaurants={restaurants} reviewsIndex={restaurantsIndex} />
      </ul>
    </>
  );
};
