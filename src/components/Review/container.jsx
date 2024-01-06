import { LoadingOutlined } from '@ant-design/icons';
import { useGetReviewsQuery } from '../../redux/services/api';
import { Review } from './Review';

export const ReviewContainer = ({ reviewIds }) => {
  const { isFetching } = useGetReviewsQuery();

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

  return <Review reviewIds={reviewIds} />;
};
