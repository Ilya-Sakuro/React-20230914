import classNames from 'classnames';
import { useContext } from 'react';
import { RestaurantContext } from '../../contexts/RestaurantContext';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Tab } from '../Tab/component';
import { ThemeButton } from '../ThemeButton/component';
import style from './style.module.scss';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import { LoadingOutlined } from '@ant-design/icons';
import { Cart } from '../Cart/Cart';

//TODO RestaurantTabsContainer

export const RestaurantTabs = () => {
    const { activeRestaurantId, setActiveRestaurantId } = useContext(RestaurantContext);
    const { theme } = useContext(ThemeContext);
    const { data, isLoading } = useGetRestaurantsQuery();

    const renderTab = () => {
        if (isLoading) {
            return <LoadingOutlined style={{ fontSize: 35 }} />;
        }
        return (
            <>
                {data?.map(restaurant => (
                    <Tab
                        key={restaurant.id}
                        tab={restaurant}
                        setActiveRestaurantId={setActiveRestaurantId}
                        activeTab={activeRestaurantId}
                    />
                ))}
            </>
        );
    };

    return (
        <nav
            className={classNames(style.root, {
                [style.rootDark]: theme === 'dark',
            })}
        >
            {renderTab()}
            <Cart />
            <ThemeButton />
        </nav>
    );
};
