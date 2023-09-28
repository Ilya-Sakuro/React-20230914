import { restaurants } from '../../constants/mock';
import { Counter } from '../Buttons/Counter';

export const Menu = ({ menuIndex }) => {
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
