// import { getReviewsById } from "helper/api";
// import { NavLink } from 'react-router-dom';
import { getReviewsById } from 'helper/api';

import {
  ReviewButton,
  ReviewName,
  ReviewType,
  ReviewText,
  ArrowButton,
  WrapAvatar,
  StyledLink,
  Wrap,
} from './ReviewDetails.styled';

export const ReviewDetails = ({ id }) => {
  const review = getReviewsById(id);

  return (
    <>
      <Wrap>
        <StyledLink to="reviews">
          <ReviewButton>
            <ArrowButton />
            Back to all reviews
          </ReviewButton>
        </StyledLink>
        <div>
        <WrapAvatar>
          <ReviewName>{review.user.username}</ReviewName>
          <ReviewType>{review.user.type}</ReviewType>
        </WrapAvatar>

       
        <ReviewText>{review.body}</ReviewText>


</div>
        <p>{review.photomessage}</p>
      </Wrap>

      
    </>
  );
};
