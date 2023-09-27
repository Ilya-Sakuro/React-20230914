import { restaurants } from '../../constants/mock';
import { MenuButton } from '../Buttons/MenuButton';

export const Restarans = ({ resName }) => {
  const menu = restaurants[resName].menu.map(({ id, name }) => (
    <li key={id}>
      {name} <MenuButton />
    </li>
  ));
  const reviews = restaurants[resName].reviews.map(({ user, text }) => (
    <li>
      {user}: {text}
    </li>
  ));

  return (
    <>
      <h1>{restaurants[resName].name}</h1>
      <ul>{menu}</ul>
      <ul>{reviews}</ul>
    </>
  );
};
