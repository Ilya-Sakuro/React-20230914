import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Menu } from '../Menu/Menu';
import { Restaurants } from '../Restaurants/component';
import { Reviews } from '../Reviews/Reviews';
import style from './style.module.scss';

export const Restaurant = ({ restaurants, restaurantsIndex }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={classNames(style.root, { [style.rootDark]: theme === 'dark' })}>
      <Restaurants restaurants={restaurants} restaurantsIndex={restaurantsIndex} />
      <div className={style.warper}>
        <Menu theme={theme} restaurants={restaurants} menuIndex={restaurantsIndex} />
        <Reviews theme={theme} restaurants={restaurants} reviewsIndex={restaurantsIndex} />
      </div>
    </main>
  );
};
