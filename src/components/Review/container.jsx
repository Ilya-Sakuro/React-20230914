import { SyncOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/review/selectors';
import { Review } from './Review';

export const ReviewContainer = ({ reviewIds }) => {
  const review = useSelector((state) => selectReviewById(state, reviewIds));

  if (!review) {
    return (
      <SyncOutlined
        style={{
          fontSize: 24,
          color: '#fa6400',
        }}
        spin
      />
    );
  }

  return <Review review={review} />;
};
