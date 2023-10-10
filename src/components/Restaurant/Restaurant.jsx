import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Menu } from '../Menu/Menu';
import { NameRestaurant } from '../NameRestaurant/component';
import { Reviews } from '../Reviews/Reviews';
import style from './style.module.scss';

export const Restaurant = ({ restaurants }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={classNames(style.root, { [style.rootDark]: theme === 'dark' })}>
      <NameRestaurant name={restaurants.name} />
      <div className={style.warper}>
        <Menu menu={restaurants.menu} />
        <Reviews reviews={restaurants.reviews} />
      </div>
    </main>
  );
};
