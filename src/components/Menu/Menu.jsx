import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Dish } from '../Dish/component';
import style from './style.module.scss';

export const Menu = ({ menuId }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <h2 className={classNames(style.subtitle, { [style.subtitleDark]: theme === 'dark' })}>Menu</h2>
      <ul className={style.list}>
        {menuId.map((id) => (
          <Dish key={id} dishId={id} />
        ))}
      </ul>
    </>
  );
};
