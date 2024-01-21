import { LoadingOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { RestaurantContext } from '../../contexts/RestaurantContext';
import { useGetReviewsQuery, useGetUsersQuery } from '../../redux/services/api';
import { Review } from './Review';

export const ReviewContainer = ({ reviewIds }) => {
    const { activeRestaurantId } = useContext(RestaurantContext);
    const { data, isLoading } = useGetReviewsQuery(activeRestaurantId);

    const users = useGetUsersQuery();
    if (users.isLoading && isLoading) {
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

    return <Review data={data} reviewIds={reviewIds} />;
};
