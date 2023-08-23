// import { getReviewsById } from "helper/api";

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { getReviewsById } from 'helper/api';
import { useParams } from 'react-router-dom';

export const ReviewDetails = () => {
  const { id } = useParams();
  const review = getReviewsById(id);
    
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
