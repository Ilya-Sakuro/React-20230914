import { Review } from '../Review/Review';

export const Reviews = ({ restaurants, reviewsIndex }) => {
  return (
    <>
      {restaurants[reviewsIndex].reviews.map(({ id, user, text }) => (
        <Review key={id} user={user} text={text} />
      ))}
    </>
  );
};
