import { Counter } from '../Counter/Counter';
import style from './style.module.scss';

export const Menu = ({ restaurants, menuIndex }) => {
  return (
    <>
      {restaurants[menuIndex].menu.map(({ id, name }) => (
        <li key={id} className={style.item}>
          {name} <Counter />
        </li>
      ))}
    </>
  );
};
