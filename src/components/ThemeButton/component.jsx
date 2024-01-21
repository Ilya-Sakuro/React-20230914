import style from './style.module.scss';
import sun from '../../img/sun.svg';
import moon from '../../img/moon.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export const ThemeButton = () => {
    const { theme, toggleThem } = useContext(ThemeContext);

    return (
        <button className={style.button} onClick={toggleThem}>
            <img
                className={style.img}
                src={theme === 'default' ? moon : sun}
                alt='SunImg'
                width={'25px'}
                height={'25px'}
            />
        </button>
    );
};
