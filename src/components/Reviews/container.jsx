import { SyncOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { REQUEST_STATUS } from '../../constants/statusConfig';
import { useRequest } from '../../hooks/use-request';
import { selectRestaurantReviewsById } from '../../redux/entities/restaurant/selectors';
import { getReviewsByRestaurantIfNotExist } from '../../redux/entities/review/thunks/get-reveiws-by-restaurant';
import { getUsersIfNotExist } from '../../redux/entities/user/thunks/get-users';
import { Reviews } from './Reviews';

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurantReviews = useSelector((state) => selectRestaurantReviewsById(state, restaurantId));
  const reviewsLoadingStatus = useRequest(getReviewsByRestaurantIfNotExist, restaurantId);
  const userLoadingStatus = useRequest(getUsersIfNotExist, restaurantId);

  if (reviewsLoadingStatus === REQUEST_STATUS.loading || userLoadingStatus === REQUEST_STATUS.loading) {
    return (
      <div style={{ margin: '0 auto' }}>
        <SyncOutlined
          style={{
            fontSize: 50,
            color: 'white',
          }}
          spin
        />
      </div>
    );
  }

  return <Reviews reviews={restaurantReviews} />;
};
