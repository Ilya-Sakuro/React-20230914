import classNames from 'classnames';
import { Dish } from '../Dish/component';
import style from './style.module.scss';

export const Menu = ({ restaurants, menuIndex, theme }) => {
  return (
    <>
      <h2 className={classNames(style.subtitle, { [style.subtitleDark]: theme === 'dark' })}>Menu</h2>
      <ul className={style.list}>
        {restaurants[menuIndex].menu.map(({ id, name }) => (
          <Dish key={id} dish={name} />
        ))}
      </ul>
    </>
  );
};
