import classNames from 'classnames';
import style from './style.module.scss';

export const NameRestaurant = ({ name }) => {
  return (
    <div
      className={classNames(
        style.titleBack,
        {
          [style.titleBack1]: name === 'Dishoom',
          [style.titleBack2]: name === 'Homeslice',
          [style.titleBack3]: name === 'Fabrique',
          [style.titleBack4]: name === 'Flat Iron',
        },
        style.title
      )}
    >
      <h1>{name}</h1>
    </div>
  );
};
