import classNames from 'classnames';
import { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import style from './style.module.scss';

export const Button = ({
  title,
  onClick,
  disabled,
  isActive,
  className,
  viewVariant = 'buttonBase',
  size = 'm',
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={classNames(className, style[size], style[viewVariant], {
        [style.active]: isActive,
        [style.dark]: !isActive && theme === 'dark',
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
