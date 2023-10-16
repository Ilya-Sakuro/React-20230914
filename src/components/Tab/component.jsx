import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';
import { Button } from '../Buttons/Button';

export const Tab = ({ tabId, setActiveRestaurantId, activeTab }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, tabId));

  return (
    <Button
      title={restaurant.name}
      onClick={() => setActiveRestaurantId(tabId)}
      viewVariant="buttonAccent"
      isActive={activeTab === tabId}
    />
  );
};
