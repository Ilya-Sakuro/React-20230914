import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { DishContainer } from '../Dish/container';
import style from './style.module.scss';

export const Menu = ({ menu }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <h2 className={classNames(style.subtitle, { [style.subtitleDark]: theme === 'dark' })}>
                Menu
            </h2>
            <ul className={style.list}>
                {menu?.map(id => (
                    <li
                        key={id}
                        className={classNames(style.item, { [style.itemDark]: theme === 'dark' })}
                    >
                        <DishContainer dishId={id} />
                    </li>
                ))}
            </ul>
        </>
    );
};
