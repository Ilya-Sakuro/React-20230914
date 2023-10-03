import { Dish } from '../Dish/Dish';

export const Menu = ({ restaurants, menuIndex }) => {
  return (
    <>
      {restaurants[menuIndex].menu.map(({ id, name }) => (
        <Dish key={id} dish={name} />
      ))}
    </>
  );
};
