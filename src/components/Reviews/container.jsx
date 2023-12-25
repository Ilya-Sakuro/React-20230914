import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectRestaurantReviewsById } from '../../redux/entities/restaurant/selectors';
import { getReviewsByRestaurantIfNotExist } from '../../redux/entities/review/thunks/get-reveiws-by-restaurant';
import { getUsersIfNotExist } from '../../redux/entities/user/thunks/get-users';
import { Reviews } from './Reviews';

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurantReviews = useSelector((state) => selectRestaurantReviewsById(state, restaurantId));
  const despatch = useDispatch();

  useEffect(() => {
    despatch(getReviewsByRestaurantIfNotExist(restaurantId));
  }, [restaurantId]);

  useEffect(() => {
    despatch(getUsersIfNotExist());
  }, []);

  return <Reviews reviews={restaurantReviews} />;
};
