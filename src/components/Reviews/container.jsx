import { LoadingOutlined } from '@ant-design/icons';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import { Reviews } from './Reviews';

export const ReviewsContainer = ({ restaurantId }) => {
    const { data, isLoading } = useGetRestaurantsQuery(undefined, {
        selectFromResult: result => {
            return { ...result, data: result?.data?.find(({ id }) => id === restaurantId) };
        },
    });
    if (isLoading) {
        return <LoadingOutlined style={{ fontSize: 24, color: '#fa6400' }} />;
    }

    return <Reviews reviews={data?.reviews} />;
};
