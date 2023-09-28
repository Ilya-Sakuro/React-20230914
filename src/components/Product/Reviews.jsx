import { restaurants } from '../../constants/mock';

export const Reviews = ({ reviewsIndex }) => {
  return (
    <>
      {restaurants[reviewsIndex].reviews.map(({ user, text }) => (
        <li>
          {user}: {text}
        </li>
      ))}
    </>
  );
};
