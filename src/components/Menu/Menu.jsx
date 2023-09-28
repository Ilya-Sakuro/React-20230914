import { Counter } from '../Counter/Counter';

export const Menu = ({ restaurants, menuIndex }) => {
  return (
    <>
      {restaurants[menuIndex].menu.map(({ id, name }) => (
        <li key={id}>
          {name} <Counter />
        </li>
      ))}
    </>
  );
};
