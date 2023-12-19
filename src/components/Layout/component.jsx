import { Footer } from '../Footer/Footer';
import { RestaurantTabs } from '../RestaurantTabs/RestaurantTabs';

export const Layout = ({ children }) => {
  return (
    <>
      <RestaurantTabs />
      {children}
      <Footer />
    </>
  );
};
