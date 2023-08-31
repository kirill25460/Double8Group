// import { getReviewsById } from "helper/api";

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { getReviewsById } from 'helper/api';


export const ReviewDetails = () => {
  const review = getReviewsById();
    
  return (
    <>
      <Header />
        <p>{review.id}</p>
        <p>{review.body}</p>
        <p>{review.type}</p>
        <p>{review.user.id}</p>
        <p>{review.user.username}</p>
      <Footer />
    </>
  );
};
