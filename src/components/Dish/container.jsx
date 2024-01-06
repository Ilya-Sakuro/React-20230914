import { LoadingOutlined } from '@ant-design/icons';
import { useGetProductsQuery } from '../../redux/services/api';
import { Dish } from './component';

export const DishContainer = ({ dishId }) => {
  const { data, isFetching } = useGetProductsQuery();

  if (isFetching) {
    return (
      <LoadingOutlined
        style={{
          fontSize: 24,
          color: '#fa6400',
        }}
        spin
      />
    );
  }

  return <Dish dish={data} dishId={dishId} />;
};
