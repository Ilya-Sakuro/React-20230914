import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { RestaurantTabs } from '../RestaurantTabs/RestaurantTabs';

export const Layout = () => {
    return (
        <>
            <header>
                <RestaurantTabs />
            </header>
            <Outlet />
            <Footer />
        </>
    );
};
