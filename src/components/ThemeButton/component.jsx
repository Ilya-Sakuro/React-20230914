import style from './style.module.scss';
import sun from '../../img/sun.svg';
import moon from '../../img/moon.svg';

export const ThemeButton = ({ theme, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      <img
        className={style.img}
        src={theme === 'default' ? moon : sun}
        alt="SunImg"
        width={'25px'}
        height={'25px'}
      />
    </button>
  );
};
