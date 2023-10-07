import classNames from 'classnames';
import style from './style.module.scss';

export const Button = ({
  title,
  onClick,
  disabled,
  activeRestaurantIndex,
  index,
  positionButtonsTabs,
  w,
  theme,
}) => {
  return (
    <button
      className={classNames({
        [style.text]: positionButtonsTabs,
        [positionButtonsTabs]: positionButtonsTabs,
        [style.active]: index === activeRestaurantIndex,
        [style.button]: !positionButtonsTabs,
        [style.disabled]: disabled,
        [style.width]: w,
        [style.disabledDark]: disabled && theme === 'dark',
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
