import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Dish } from '../Dish/component';
import style from './style.module.scss';

export const Menu = ({ menu }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <h2 className={classNames(style.subtitle, { [style.subtitleDark]: theme === 'dark' })}>Menu</h2>
      <ul className={style.list}>
        {menu.map(({ id, name }) => (
          <Dish key={id} dish={name} />
        ))}
      </ul>
    </>
  );
};
