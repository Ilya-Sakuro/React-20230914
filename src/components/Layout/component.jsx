import { Footer } from '../Footer/Footer';
import { RestaurantTabs } from '../RestaurantTabs/RestaurantTabs';

export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <RestaurantTabs />
      </header>
      {children}
      <Footer />
    </>
  );
};
