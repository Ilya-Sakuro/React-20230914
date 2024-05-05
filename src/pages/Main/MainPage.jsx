import { useContext } from 'react';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import { RestaurantContext } from '../../contexts/RestaurantContext';
import style from './style.module.scss';

export const MainPage = () => {
    const { activeRestaurantId } = useContext(RestaurantContext);

    const layoutContent = () => {
        if (activeRestaurantId === null) {
            return <div className={style.row}>WELCOME</div>;
        }
        return <Restaurant />;
    };

    return <> {layoutContent()}</>;
};
