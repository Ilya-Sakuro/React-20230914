import { restaurants } from '../../constants/mock';
import { Menu } from './Menu';
import { Reviews } from './Reviews';

export const Restaurants = ({ restaurantsIndex }) => {
  return (
    <>
      <h1>{restaurants[restaurantsIndex].name}</h1>
      <ul>
        <Menu menuIndex={restaurantsIndex} />
      </ul>
      <ul>
        <Reviews reviewsIndex={restaurantsIndex} />
      </ul>
    </>
  );
};
