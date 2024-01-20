import { Button } from '../Buttons/Button';

export const Tab = ({ tab, setActiveRestaurantId, activeTab }) => {
  return (
    <Button
      title={tab.name}
      onClick={() => setActiveRestaurantId(tab.id)}
      viewVariant="buttonAccent"
      isActive={activeTab === tab.id}
    />
  );
};
