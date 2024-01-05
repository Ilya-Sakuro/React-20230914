import { UserContainer } from '../User/container';

export const Review = ({ review }) => {
  return (
    <>
      <UserContainer userId={review.userId} />
      <span> {review.text}</span>
    </>
  );
};
