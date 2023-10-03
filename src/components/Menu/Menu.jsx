import { Dish } from '../Dish/component';

export const Menu = ({ restaurants, menuIndex }) => {
  return (
    <>
      {restaurants[menuIndex].menu.map(({ id, name }) => (
        <Dish key={id} dish={name} />
      ))}
    </>
  );
};
