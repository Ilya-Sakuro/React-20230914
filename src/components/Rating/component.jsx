import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import style from './style.module.scss';

export const Rating = ({ state, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={style.rating}>
      <label className={style.tittle} htmlFor="rating">
        Rating:
      </label>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={classNames(style.span, {
              [style.selected]: value <= state.rating,
              [style.disabled]: value > state.rating,
              [style.disabledDark]: theme === 'dark' && value > state.rating,
            })}
            onClick={() => onClick(value)}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};
