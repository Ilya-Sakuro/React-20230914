import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import style from './style.module.scss';

export const Button = ({ title, onClick, disabled, active, positionButtonsTabs, w }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={classNames(active, {
        [style.text]: positionButtonsTabs,
        [positionButtonsTabs]: positionButtonsTabs,
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
