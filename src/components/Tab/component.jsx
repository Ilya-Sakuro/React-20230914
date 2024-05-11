import classNames from 'classnames';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Button } from '../Buttons/Button';
import styles from './Tab.module.scss';

export const Tab = ({ tab, setActiveRestaurantId, activeTab }) => {
    const { theme } = useContext(ThemeContext);

    const setId = () => {
        sessionStorage.setItem('activeTab', tab.id);
        setActiveRestaurantId(tab.id);
    };

    return (
        <NavLink
            to={`restaurants/${tab.title}`}
            className={theme === 'dark' ? styles.dark : styles.default}
        >
            <Button
                title={tab.title.split(' ').slice(0, 4).join(' ').toUpperCase()}
                onClick={setId}
                viewVariant='buttonAccent'
                isActive={activeTab === tab.id}
            />{' '}
        </NavLink>
    );
};
