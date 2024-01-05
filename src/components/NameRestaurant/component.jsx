import classNames from 'classnames';
import style from './style.module.scss';

export const NameRestaurant = ({ name }) => {
  return (
    <div className={classNames(style.titleBack, style.title)}>
      <h1>{name}</h1>
    </div>
  );
};
