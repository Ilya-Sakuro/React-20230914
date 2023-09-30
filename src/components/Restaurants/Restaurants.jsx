import classNames from 'classnames';
import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';
import style from './style.module.scss';

export const Restaurants = ({ restaurants, restaurantsIndex }) => {
  return (
    <main className={style.root}>
      <div
        className={classNames(
          {
            [style.titleBack1]: restaurantsIndex === 0,
            [style.titleBack2]: restaurantsIndex === 1,
            [style.titleBack3]: restaurantsIndex === 2,
            [style.titleBack4]: restaurantsIndex === 3,
          },
          style.title
        )}
      >
        <h1>{restaurants[restaurantsIndex].name}</h1>
      </div>
      <div className={style.main}>
        <h2 className={style.subtitle}>Menu</h2>
        <ul className={style.list}>
          <Menu restaurants={restaurants} menuIndex={restaurantsIndex} />
        </ul>
        <h2 className={style.subtitle}>Reviews</h2>
        <ul className={style.list}>
          <Reviews restaurants={restaurants} reviewsIndex={restaurantsIndex} />
        </ul>
      </div>
    </main>
  );
};
