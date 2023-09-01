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
  ReviewButtonMob,
  StyledLink,
  ReviewPic1,
  ButtonWrap,
  ReviewPic2,
  WrapWrap,
  Container,
  MobText,
  FotoWrap,
  ReviewPic3,
  MainWrap
} from './ReviewDetails.styled';

export const ReviewDetails = ({ id }) => {
  const review = getReviewsById(id);

  return (
    <>
      <Container>
      <MainWrap>
        <StyledLink to="reviews">
          <ReviewButton>
            <ArrowButton />
            Back to all reviews
          </ReviewButton>
        </StyledLink>
        
          <WrapAvatar>
            <ReviewName>{review.user.username}</ReviewName>
            <ReviewType>{review.user.type}</ReviewType>
          </WrapAvatar>
          <ReviewText>{review.body}</ReviewText>
        </MainWrap>
       <MobText>See atached photos</MobText>
        <FotoWrap>
        <ReviewPic1 src={review.photomessage[1]} alt="review" />
        <WrapWrap>
        <ReviewPic2 src={review.photomessage[2]} alt="review" />
        <ReviewPic3 src={review.photomessage[3]} alt="review" />
        </WrapWrap>
        </FotoWrap>
        <ButtonWrap>
        <StyledLink to="reviews">
          <ReviewButtonMob>
            <ArrowButton />
            Back to all reviews
          </ReviewButtonMob>
        </StyledLink>
        </ButtonWrap>
       
      </Container>
    </>
  );
};
