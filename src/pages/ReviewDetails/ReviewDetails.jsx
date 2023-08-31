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
  Container,
} from './ReviewDetails.styled';

export const ReviewDetails = ({ id }) => {
  const review = getReviewsById(id);

  return (
    <>
      <Container>
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
        <img src={review.photomessage[0]} alt="asdsad" />
        <img src={review.photomessage[1]} alt="asdsad" />
        <img src={review.photomessage[2]} alt="asdsad" />
      </Container>
    </>
  );
};
