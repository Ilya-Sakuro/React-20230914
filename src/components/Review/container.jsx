import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/review/selectors';
import { Review } from './Review';

export const ReviewContainer = ({ reviewIds }) => {
  const review = useSelector((state) => selectReviewById(state, reviewIds));

  if (!review) {
    return null;
  }

  return <Review review={review} />;
};
