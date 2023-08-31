// import { getReviewsById } from "helper/api";
import { NavLink } from 'react-router-dom';
import { getReviewsById } from 'helper/api';

import {ReviewButton,ReviewName,ReviewType,ReviewText,ArrowButton} from "./ReviewDetails.styled";

export const ReviewDetails = ({id}) => {

  const review = getReviewsById(id)
    
  return (
    <>
    <NavLink to="reviews"><ReviewButton><ArrowButton/>Back to all reviews</ReviewButton></NavLink>
     <ReviewName>{review.user.username}</ReviewName>
     <ReviewType>{review.user.type}</ReviewType>
        <p>{review.id}</p>
        <ReviewText>{review.body}</ReviewText>
        <p>{review.photomessage}</p>
       
    </>
  );
};
