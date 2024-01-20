import { LoadingOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { RestaurantContext } from '../../contexts/RestaurantContext';
import { useGetProductsQuery } from '../../redux/services/api';
import { Dish } from './component';

export const DishContainer = ({ dishId }) => {
    const { activeRestaurantId } = useContext(RestaurantContext);
    const { data, isFetching } = useGetProductsQuery(activeRestaurantId);

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
