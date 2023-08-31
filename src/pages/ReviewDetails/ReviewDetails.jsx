// import { getReviewsById } from "helper/api";

// import { Footer } from 'components/Footer/Footer';
// import { Header } from 'components/Header/Header';
import { getReviewsById } from 'helper/api';


export const ReviewDetails = ({id}) => {

  const review = getReviewsById(id)
    
  return (
    <>
        <p>{review.id}</p>
        <p>{review.body}</p>
        <p>{review.photomessage}</p>
        <p>{review.user.username}</p>
    </>
  );
};
