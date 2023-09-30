import classNames from 'classnames';
import style from './style.module.scss';

export const Button = ({ title, onClick, disabled, className }) => {
  return (
    <button
      className={classNames(className, {
        [style.button]: !className,
        [style.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
