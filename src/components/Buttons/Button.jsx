import classNames from 'classnames';
import style from './style.module.scss';

export const Button = ({ title, onClick, disabled, activeRestaurantIndex, index, positionButtonsTabs }) => {
  return (
    <button
      className={classNames({
        [style.text]: positionButtonsTabs,
        [positionButtonsTabs]: positionButtonsTabs,
        [style.active]: index === activeRestaurantIndex,
        [style.button]: !positionButtonsTabs,
        [style.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
