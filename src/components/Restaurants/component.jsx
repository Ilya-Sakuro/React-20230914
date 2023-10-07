import classNames from 'classnames';
import style from './style.module.scss';

export const Restaurants = ({ restaurants, restaurantsIndex }) => {
  return (
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
  );
};
