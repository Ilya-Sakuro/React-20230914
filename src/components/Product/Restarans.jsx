import { restaurants } from '../../constants/mock';
import { MenuButton } from '../Buttons/MenuButton';

export const Restarans = ({ resName }) => {
  return (
    <>
      <h1>{restaurants[resName].name}</h1>
      <ul>
        {restaurants[resName].menu.map(({ name }) => (
          <li>
            {name} <MenuButton />
          </li>
        ))}
      </ul>
      <ul>
        {restaurants[resName].reviews.map(({ user, text }) => (
          <li>
            {user}: {text}
          </li>
        ))}
      </ul>
    </>
  );
};
