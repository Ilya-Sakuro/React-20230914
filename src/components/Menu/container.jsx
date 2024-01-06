import { LoadingOutlined } from '@ant-design/icons';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import { Menu } from './Menu';

export const MenuContainer = ({ restaurantId }) => {
  const { data, isFetching } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => {
      return { ...result, data: result?.data.find(({ id }) => id === restaurantId) };
    },
  });

  if (isFetching) {
    return <LoadingOutlined style={{ fontSize: 24, color: '#fa6400' }} />;
  }

  return <Menu menu={data.menu} />;
};
